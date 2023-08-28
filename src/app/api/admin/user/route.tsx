import { PrismaClient } from "@prisma/client";import { NextRequest, NextResponse } from "next/server";

//post in by prisma
const prisma = new PrismaClient();

 export const GET = async (req: NextRequest) => {
  try {
    const totalUsers = await prisma.user.findMany({});


    // total student count total coach total admin
    return new NextResponse(
      JSON.stringify({

        data:totalUsers
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
