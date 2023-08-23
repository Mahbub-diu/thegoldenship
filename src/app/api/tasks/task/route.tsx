import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
// import handler from "../../auth/[...nextauth]/route";
let bcrypt = require("bcrypt");
//post in by prisma
const prisma = new PrismaClient();
export const POST = async (req: NextRequest) => {
  // get server session
  const session: any = await getServerSession(options);
  let data = await req.json();
  let {
    title,
    content,
    status = "pending",
    parentTaskId,
    published = false,
    authorId,
  } = data;
  console.log(data);
  try {
    const task = await prisma.task.create({
      data: {
        title: title.length > 0 ? title : content,
        content,
        published,
        status,
        authorId: session?.user?.id,
        parentTaskId,
      },
    });
    return new NextResponse(JSON.stringify(task), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
};

export const GET = async (req: NextRequest) => {
  const session: any = await getServerSession(options);

  try {
    // today task
    const tasks = await prisma.task.findMany({
      where: {
        authorId: session?.user?.id,
        createdAt: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
          lt: new Date(new Date().setHours(23, 59, 59, 999)),
        },
        
      },include: {
          subTasks: true, // Include all posts in the returned object
        },
    });
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    //current month tasks group by day
    const currentMonthTasks = await prisma.task.findMany({
      where: {
        AND: [
          {
            authorId: session?.user?.id,
          },
          {
            createdAt: {
              gte: new Date(currentDate.getFullYear(), currentMonth - 1, 1),
            },
          }, // Start of the current month
          {
            createdAt: {
              lt: new Date(currentDate.getFullYear(), currentMonth, 1),
            },
          }, // Start of the next month
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    let tasksByDay: any = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
    };
    currentMonthTasks.forEach((task) => {
      let date = new Date(task.createdAt);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      if (day == 1) {
        tasksByDay["monday"].push(task);
      }
      // if tuesday
      if (day == 2) {
        tasksByDay["monday"].push(task);
      }
      // if wednesday
      if (day == 3) {
        tasksByDay["monday"].push(task);
      }
      // if thursday
      if (day == 4) {
        tasksByDay["monday"].push(task);
      }
      // if friday
      if (day == 5) {
        tasksByDay["monday"].push(task);
      }
    });
    // 7 days tasks
    const sevenDaysTasks = await prisma.task.findMany({
      where: {
        AND: [
          {
            authorId: session?.user?.id,
          },
          {
            createdAt: {
              gte: new Date(
                new Date().setDate(new Date().getDate() - 7)
              ).toISOString(),
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new NextResponse(
      JSON.stringify({
        todayTasks: tasks,
        currentMonthTasks,
        tasksByDay,
        sevenDaysTasks,
      }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
};
