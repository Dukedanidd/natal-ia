"use client";

import apiClient from "@/libs/api";
import { useState, useEffect } from "react";
import { LoadingCircle } from "@/components/forms/fields";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: users } = await apiClient.get("/admin/users");
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    if (!date) return "Never";
    return new Date(date).toLocaleString();
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="pb-4">
              <h1 className="text-3xl font-bold">Users Management 👥</h1>
              <p className="text-gray-600">
                View and manage all registered users
              </p>
            </div>

            {loading ? (
              <LoadingCircle />
            ) : (
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Created At</th>
                      <th>Last Login</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{formatDate(user.createdAt)}</td>
                        <td>{formatDate(user.lastLogin)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
