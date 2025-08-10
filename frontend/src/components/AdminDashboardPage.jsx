import React from 'react';

const App = () => {
  const pendingTutors = [
    { name: 'John Doe', date: '2024-05-20', credentials: ['Degree, Transcript'] },
    { name: 'Jane Smith', date: '2024-05-18', credentials: ['Degree, Cert.'] },
    { name: 'Peter Jones', date: '2024-05-15', credentials: ['Cert.'] },
  ];

  const disputes = [
    { id: 'D-1234', submitter: 'Student A', date: '2024-05-19' },
    { id: 'D-1233', submitter: 'Tutor B', date: '2024-05-17' },
  ];

  const AnalyticsChart = () => (
    <div className="w-full h-40 bg-gray-50 flex items-center justify-center rounded-lg text-gray-400">
      <p>Chart placeholder</p>
    </div>
  );

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog"><path d="M18 21a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="8" r="3"/><path d="M18 4v4"/><path d="M18 11v4"/></svg>
  );

  const Tooltip = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tooltip"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3-2-3s-1.8 1-3 2-4 2-5 0-2-2-3-2c-1 0-2 1-2 3a7 7 0 0 0 7 7z"/><path d="M12 11h.01"/></svg>
  );

  return (
    <div className="font-sans bg-gray-900 text-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex flex-col space-y-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-indigo-600">
          <UserIcon />
          <span>Verifications</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
          <Tooltip />
          <span>Disputes</span>
        </a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Pending Verifications */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Pending Verifications Queue</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-2">Tutor Name</th>
                  <th className="px-4 py-2">Application Date</th>
                  <th className="px-4 py-2">Credentials</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingTutors.map((tutor, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-4 py-2">{tutor.name}</td>
                    <td className="px-4 py-2">{tutor.date}</td>
                    <td className="px-4 py-2">{tutor.credentials.join(', ')}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button className="bg-green-500 text-white text-sm px-3 py-1 rounded-lg">Approve</button>
                      <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-lg">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Disputes Interface */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Disputes Interface</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-2">Dispute ID</th>
                  <th className="px-4 py-2">Submitter</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {disputes.map((dispute, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-4 py-2">{dispute.id}</td>
                    <td className="px-4 py-2">{dispute.submitter}</td>
                    <td className="px-4 py-2">{dispute.date}</td>
                    <td className="px-4 py-2">
                      <button className="text-indigo-400 hover:underline">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Management & Analytics */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">User Management & Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400">Active Users</p>
              <h3 className="text-3xl font-bold">17,750</h3>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400">New Signups</p>
              <h3 className="text-3xl font-bold">42,34</h3>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400">Booking Volume</p>
              <h3 className="text-3xl font-bold">$1,150</h3>
            </div>
          </div>
          <div className="mt-6">
            <AnalyticsChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
