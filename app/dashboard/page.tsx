import React from 'react';

const dashboardItems = [
  { title: 'Analytics', description: 'View your site performance metrics', icon: '📊' },
  { title: 'Projects', description: 'Manage your ongoing projects', icon: '📁' },
  { title: 'Tasks', description: 'Track your to-do list and deadlines', icon: '✅' },
  { title: 'Messages', description: 'Check your inbox and communications', icon: '💬' },
  { title: 'Settings', description: 'Customize your account preferences', icon: '⚙️' },
  { title: 'Help', description: 'Get support and documentation', icon: '❓' },
];

export default function DashboardPage() {
  return (
    <div className="page-content">
      <header className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800">Your Dashboard</h1>
          <p className="mt-4 text-xl text-gray-600">Welcome back! Here&apos;s an overview of your analytics</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Total Visitors</h3>
              <p className="text-4xl font-bold text-blue-600">12,345</p>
              <p className="text-sm text-blue-500 mt-2">↑ 15% from last month</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Conversion Rate</h3>
              <p className="text-4xl font-bold text-green-600">3.2%</p>
              <p className="text-sm text-green-500 mt-2">↑ 0.5% from last month</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">Avg. Session Duration</h3>
              <p className="text-4xl font-bold text-purple-600">2m 35s</p>
              <p className="text-sm text-purple-500 mt-2">↓ 10s from last month</p>
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardItems.map((item, index) => (
              <div key={index} className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
