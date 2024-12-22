import Link from "next/link";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";
import DeleteBtn from "../../../components/DeleteBtn";
import AllUsers from "../../../components/AllUsers";

const DashboardPage = async () => {
  // const api_url = process.env.API_URL;
  // const response = await axios.get(`${api_url}/users/all`);
  // const users = response.data.data;
  // if (!response.ok) {
  //   throw new Error("Failed to fetch data");
  // }



  return (
    <div className="w-full  p-2 flex justify-center">
      <div className="container ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-secondary">Users Page</h1>
          <Link
            href={"/dashboard/create-user"}
            className="flex items-center gap-2 hover:gap-4 duration-300 ease-in-out font-medium"
          >
            <span>Create New User</span>

            <FaArrowRight />
          </Link>
        </div>
        <div className="h-[calc(100vh_-_100px)]  overflow-y-auto ">
        {/* client component to fetch users */}
        <AllUsers />
         
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;






// <>
// {users !== null ? (
//             <table className="table">
//               {/* head */}
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Username</th>
//                   <th>Email</th>
//                   <th>learn</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user, index) => (
//                   <tr
//                     className={`${
//                       index % 2 == 0 ? "bg-base-200" : ""
//                     } text-xl font-medium `}
//                     key={index}
//                   >
//                     <th>{index + 1}</th>
//                     <td>{user.username}</td>
//                     <td>{user.email}</td>
//                     {/* TODO : create three checkbox  and save button */}
//                     <td>برمجة | تعلم PHP | تعلم HTML</td>
//                     <td>
//                       <Link
//                         href={`/dashboard/edit-user/${user.id}`}
//                         className="btn bg-yellow-600 text-white hover:text-yellow-600 text-2xl font-medium"
//                       >
//                         edit
//                       </Link>{" "}
//                       | <DeleteBtn user={user} />{" "}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <h1 className="text-3xl">users not found</h1>
//           )}
// </>