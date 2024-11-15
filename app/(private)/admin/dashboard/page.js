"use client";

import apiClient from "@/libs/api";
import { useState, useEffect } from "react";
import { LoadingCircle } from "@/components/forms/fields";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: stats } = await apiClient.get("/admin/dashboard");
        setStats(stats);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8"></div>
      {/* Stats Section */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="topsection pb-4">
            <h1 className="text-3xl font-bold">
              Welcome to your Admin Dashboard 🚀
            </h1>
            <p className="text-gray-600">
              This is your private user dashboard where you can put whatever you
              want 🤠
            </p>
          </div>
          {loading ? (
            <LoadingCircle />
          ) : (
            <div className="bg-base-100">
              <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-px  sm:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                    <p className="text-sm/6 font-medium text-gray-400">
                      Total Users
                    </p>
                    <p className="mt-2 flex items-baseline gap-x-2">
                      <span className="text-4xl font-semibold tracking-tight text-white">
                        {stats?.usersCount || 0}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
