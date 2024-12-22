export async function POST(request) {
    const data = await request.json();
  return Response.json({ message:data}, { status: 200 });
}
