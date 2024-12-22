import prisma from "../../../../utils/db";

export async function GET(request,  {params} ) {
  const { id } = params;

  
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json({ data: user }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "internal server error" }, { status: 500 });
  }
}
