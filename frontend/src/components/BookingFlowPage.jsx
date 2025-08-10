import React from 'react';

const App = () => {
  const tutor = {
    name: 'Dr. Anya Sharma',
    image: 'https://placehold.co/40x40/e0e7ff/4338ca?text=AS',
    hourlyRate: 50
  };

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    { date: 1, available: false }, { date: 2, available: true, time: ['10:00', '11:00'] },
    { date: 3, available: true, time: ['14:00', '15:00'] }, { date: 4, available: true, time: ['16:00', '17:00'] },
    { date: 5, available: false }, { date: 6, available: false }, { date: 7, available: false },
    { date: 8, available: true, time: ['10:00'] }, { date: 9, available: true, time: ['12:00', '13:00'] },
    { date: 10, available: false }, { date: 11, available: true, time: ['10:00', '11:00'] },
    { date: 12, available: true, time: ['14:00', '15:00'] }, { date: 13, available: true, time: ['16:00', '17:00'] },
  ];

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        {/* Progress Indicator */}
        <div className="flex justify-between items-center text-center mb-8">
          <div className="flex-1">
            <div className="text-sm font-semibold text-indigo-600">1. Select Time</div>
            <div className="h-1 bg-indigo-600 mt-2 rounded-full"></div>
          </div>
          <div className="flex-1 ml-4">
            <div className="text-sm text-gray-400">2. Confirm Details</div>
            <div className="h-1 bg-gray-200 mt-2 rounded-full"></div>
          </div>
          <div className="flex-1 ml-4">
            <div className="text-sm text-gray-400">3. Payment</div>
            <div className="h-1 bg-gray-200 mt-2 rounded-full"></div>
          </div>
        </div>

        {/* Calendar */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
          <span>Select Time</span>
          <img src={tutor.image} alt={tutor.name} className="w-8 h-8 rounded-full" />
          <span className="text-base font-normal text-gray-500">{tutor.name}</span>
        </h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-500 mb-2">
            {days.map(day => <div key={day}>{day}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {dates.map((day, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-center font-medium transition-colors ${day.available ? 'bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200' : 'text-gray-400'}`}
              >
                {day.date}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">Hourly rate: <span className="font-semibold">${tutor.hourlyRate}</span></p>

        <div className="flex justify-between mt-8">
          <button className="px-6 py-3 rounded-lg text-gray-600 font-semibold hover:bg-gray-200 transition">
            Cancel
          </button>
          <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
