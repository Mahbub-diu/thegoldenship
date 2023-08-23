import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
let bcrypt = require("bcrypt");
//signup in by prisma
const prisma = new PrismaClient();
export const POST = async (req: NextRequest) => {
  let data = await req.json();
 
  const { name, email, password } = data;
  try {
    //user exist
    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist) {
      return new NextResponse(
        JSON.stringify({
          error: "user already exist",
          status: 422,
        }),
        {
          status: 422,
        }
      );
    }

    const user: any = await prisma.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      },
    });
    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
};
