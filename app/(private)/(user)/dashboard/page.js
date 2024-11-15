"use client";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Welcome to your Dashboard!</h1>
            <p className="text-gray-600">
              This is your private user dashboard where you can put whatever you
              want 🤠
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
