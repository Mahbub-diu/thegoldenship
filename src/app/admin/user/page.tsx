"use client";
import { UserCount } from "@/app/components/admin/dashboard/UserCount";
import React, { useEffect, useState } from "react";

const UserPage = () => {
  let [users, setUsers] = useState<any[]>([]);
  let updatedUser = (e: any, id: any) => {
    let role = e.target.value;
    fetch(`/api/admin/user/${id}`, {
      method: "POST",
      body: JSON.stringify({
        role: role,
      }),
    })
      .then((res) => res.json())
                                                                                                                                    
      .then((data) => {
        // data value change
        let newUsers = users.map((user) => {
          if (user.id == id) {
            user.role = role;
          }
          return user;
        });
        setUsers(newUsers);
      });
  };
  useEffect(() => {
    fetch("/api/admin/user", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data?.data);
      });
  }, []);

  return (
    <>
      {" "}
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-4">
          <UserCount />

          <div className="col-12">
            <div className="card">
              <div className="card-datatable table-responsive">
                <table className="datatables-users table border-top">
                  <thead>
                    <tr>
                      <th></th>
                      <th>User</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr>
                          <td className="py-3">
                            <img
                              src="/admin/assets/img/avatars/1.png"
                              className="rounded-circle"
                              width="24"
                              alt="..."
                            />
                          </td>
                          <td className="py-3">{user.name}</td>
                          <td className="py-3">
                            <a href="mailto:">{user.email}</a>
                          </td>
                          <td className="py-3">{user.role}</td>
                          <td className="py-3">
                            <span className="badge bg-success">Active</span>
                          </td>
                          <td className="py-3">
                            <div className="btn-group">
                              <select
                                className="form-select"
                                onChange={(e) => updatedUser(e, user.id)}
                              >
                                <option value="admin">Admin</option>
                                <option value="student">Student</option>
                                <option value="coach">Coach</option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
