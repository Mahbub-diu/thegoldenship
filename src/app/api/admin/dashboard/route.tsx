import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

//post in by prisma
const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    // total student count total coach total admin
    const totalStudent = await prisma.user.count({
      where: {
        role: "student",
      },
    });
    const totalCoach = await prisma.user.count({
      where: {
        role: "coach",
      },
    });
    const totalAdmin = await prisma.user.count({
      where: {
        role: "admin",
      },
    });
    // total student count total coach total admin
    return new NextResponse(
      JSON.stringify({
        totalStudent,
        totalCoach,
        totalAdmin,
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
