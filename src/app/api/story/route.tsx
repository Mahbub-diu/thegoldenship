import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

//post in by prisma
const prisma = new PrismaClient();
export const POST = async (req: NextRequest) => {
  // get server session
  const session: any = await getServerSession(options);
  let data = await req.json();
  let {
    title,
    content,
  } = data;
  console.log(data);
  try {
    const story = await prisma.story.create({
      data: {
        title: title.length > 0 ? title : content,
        content,
        user: {
          connect: {
            id: session?.user?.id
          }
        }
      },
    });
    return new NextResponse(JSON.stringify(story), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
};
export const PUT = async (req: NextRequest) => {
  // get server session
  const session: any = await getServerSession(options);
  let data = await req.json();
  let {
    title,
    content,
    completed,
    storyId
  } = data;
  console.log(data);
  try {
    if (completed) {
      const story = await prisma.story.update({
        where: {
          id: storyId,
        },
        data: {
          completed,
        },
      });
      return new NextResponse(JSON.stringify(story), {
        status: 200,
      });
    } else {
      const story = await prisma.story.update({
        where: {
          id: storyId,
        },
        data: {
          title,
          content,
        },
      });
      return new NextResponse(JSON.stringify(story), {
        status: 200,
      });
    }
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
    // stories
    const stories = await prisma.story.findMany({
      where: {
        userId: session?.user?.id,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new NextResponse(
      JSON.stringify({
        stories,
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
