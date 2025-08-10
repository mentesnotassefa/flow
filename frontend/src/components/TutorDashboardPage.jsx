import React from 'react';

const App = () => {
  const upcomingSessions = [
    { student: 'Alice Smith', time: 'Today, 4:00 PM', image: 'https://placehold.co/40x40/e0e7ff/4338ca?text=AS' },
    { student: 'Bob Johnson', time: 'Tomorrow, 10:30 AM', image: 'https://placehold.co/40x40/fff7e6/d97706?text=BJ' },
    { student: 'Emily White', time: 'Thur, 2:00 PM', image: 'https://placehold.co/40x40/dbeafe/1d4ed8?text=EW' },
  ];

  const recentActivity = [
    'New booking from Alice Smith.',
    'Session with Bob Johnson completed.',
    'Payout of $150 processed.',
    'New message from Emily White.',
  ];

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  );

  const MessageSquare = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  );

  const DollarSign = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  );

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">Tutor</h2>
        <nav className="flex-1 space-y-4">
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-indigo-600">
            <UserIcon />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
            <MessageSquare />
            <span>Messages</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700">
            <DollarSign />
            <span>Earnings</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Earnings Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <p className="text-gray-500 font-semibold mb-2">Total Earnings</p>
            <h3 className="text-4xl font-bold text-green-500">$1,250</h3>
          </div>
          {/* Sessions Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <p className="text-gray-500 font-semibold mb-2">Upcoming Sessions</p>
            <h3 className="text-4xl font-bold text-indigo-500">5</h3>
          </div>
          {/* Students Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <p className="text-gray-500 font-semibold mb-2">Total Students</p>
            <h3 className="text-4xl font-bold text-yellow-500">22</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Sessions */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Sessions</h2>
            <ul className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img src={session.image} alt={session.student} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{session.student}</p>
                    <p className="text-gray-500 text-sm">{session.time}</p>
                  </div>
                  <button className="text-indigo-600 font-semibold hover:underline">View</button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              {recentActivity.map((activity, index) => (
                <li key={index} className="text-gray-700 border-b pb-2 last:border-b-0">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
