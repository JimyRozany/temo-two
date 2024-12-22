import { cookies } from "next/headers";

/**
 * @method GET
 * @url ~/api/users/logout
 * @desc logout user
 * @access public // any user can logout
 */

export async function GET() {
  try {
    const cookie = await cookies();
    cookie.delete("auth-token");

    return Response.json({ message: "logout" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "internal server error ", error },
      { status: 500 }
    );
  }
}
