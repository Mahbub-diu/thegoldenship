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
    const tasks = await prisma.task.findMany({
      where: {
        authorId: session?.user?.id,
      },
    });

    //current month tasks group by day
    const currentMonthTasks = await prisma.task.findMany({
      where: {
        authorId: session?.user?.id,
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    let currentMonthTasksGroupByDay: any = {};
    currentMonthTasks.forEach((task) => {
      let date = new Date(task.createdAt);
      let day = date.getDate();
      if (currentMonthTasksGroupByDay[day]) {
        currentMonthTasksGroupByDay[day].push(task);
      } else {
        currentMonthTasksGroupByDay[day] = [task];
      }
    });
    console.log(currentMonthTasksGroupByDay);

    return new NextResponse(JSON.stringify(tasks), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
};
