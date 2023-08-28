import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

//post in by prisma
const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    // total student count total coach total admin
    return new NextResponse(
      JSON.stringify({
        data: user,
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
export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    console.log(id);
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    console.log(user);
    if (user) {
      const data = await req.json();
      const { name, email, role, status } = data;
      console.log(data);
      const updatedUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name: name ? name : user.name,
          email: email ? email : user.email,
          role: role ? role : user.role,
        },
      });
      console.log(updatedUser);
      return new NextResponse(
        JSON.stringify({
          data: updatedUser,
        }),
        {
          status: 200,
        }
      );
    }

    // total student count total coach total admin
    return new NextResponse(
      JSON.stringify({
        data: user,
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
