"use client";
import { useEffect, useState } from "react";
import DeleteBtn from "./DeleteBtn";
import axios from "axios";
import Link from "next/link";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/all`)
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {users !== null ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>learn</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className={`${
                  index % 2 == 0 ? "bg-base-200" : ""
                } text-xl font-medium `}
                key={index}
              >
                <th>{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                {/* TODO : create three checkbox  and save button */}
                <td>برمجة | تعلم PHP | تعلم HTML</td>
                <td>
                  <Link
                    href={`/dashboard/edit-user/${user.id}`}
                    className="btn bg-yellow-600 text-white hover:text-yellow-600 text-2xl font-medium"
                  >
                    edit
                  </Link>{" "}
                  | <DeleteBtn user={user} />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-3xl">users not found</h1>
      )}
    </>
  );
};

export default AllUsers;
