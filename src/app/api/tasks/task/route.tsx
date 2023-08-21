import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
// import handler from "../../auth/[...nextauth]/route";
let bcrypt = require("bcrypt");
//post in by prisma
const prisma = new PrismaClient();
export const POST = async (req: NextRequest) => {
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
        title,
        content,
        published,
        status,
        authorId,
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
  try {
    const tasks = await prisma.task.findMany();
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
