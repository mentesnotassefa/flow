import React from 'react';

const App = () => {
  const tutor = {
    name: 'Dr. Anya Sharma',
    subjects: 'Mathematics, Physics, Chemistry',
    bio: 'Dr. Sharma is an experienced tutor with a passion for helping students excel. She holds a Ph.D. in Physics from MIT and has been teaching for over 10 years, specializing in advanced high school and college-level courses.',
    profilePicture: 'https://placehold.co/150x150/e0e7ff/4338ca?text=AS',
    credentials: [
      'Ph.D. in Physics (MIT)',
      'B.Sc. in Mathematics (Stanford)',
      'Certified Tutor (National Tutoring Association)',
    ],
    reviews: [
      { student: 'Jane Doe', rating: 5, comment: 'Dr. Sharma is an amazing tutor! She made complex physics concepts easy to understand.' },
      { student: 'John Smith', rating: 4, comment: 'Very knowledgeable and patient. My grades have improved significantly.' },
    ],
    hourlyRate: 50,
  };

  const CheckCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-8.5"/><path d="m14 2 8 8-8 8"/></svg>
  );

  const Star = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-star ${filled ? 'text-yellow-400' : 'text-gray-300'}`}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  );

  const RatingStars = ({ rating }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating} />
      ))}
    </div>
  );

  // Mock Calendar component
  const Calendar = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = [
      { date: 1, available: false }, { date: 2, available: true, time: ['10:00', '11:00'] },
      { date: 3, available: true, time: ['14:00', '15:00'] }, { date: 4, available: true, time: ['16:00', '17:00'] },
      { date: 5, available: false }, { date: 6, available: false }, { date: 7, available: false },
      { date: 8, available: true, time: ['10:00'] }, { date: 9, available: true, time: ['12:00', '13:00'] },
      // ... more dates
    ];

    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-500 mb-2">
          {days.map(day => <div key={day}>{day}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {dates.map((day, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg text-center font-medium ${day.available ? 'bg-indigo-100 text-indigo-800 cursor-pointer hover:bg-indigo-200' : 'text-gray-400'}`}
            >
              {day.date}
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">Click an available slot to book.</p>
      </div>
    );
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={tutor.profilePicture}
            alt={tutor.name}
            className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-800">{tutor.name}</h1>
            <p className="text-xl text-indigo-600 font-medium">{tutor.subjects}</p>
            <p className="mt-4 text-gray-600 max-w-2xl">{tutor.bio}</p>
          </div>
          <div className="flex-shrink-0">
            <div className="text-3xl font-bold text-gray-800">${tutor.hourlyRate}<span className="text-lg font-normal text-gray-500">/hr</span></div>
            <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Book a Session
            </button>
          </div>
        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Credentials</h2>
            <ul className="space-y-3">
              {tutor.credentials.map((cred, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-700">
                  <CheckCircle />
                  <span>{cred}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Reviews & Ratings</h2>
            <div className="flex items-center space-x-2 mb-4">
              <RatingStars rating={4.8} />
              <span className="text-gray-600 font-semibold">4.8 / 5 based on 125 reviews</span>
            </div>
            <div className="space-y-4">
              {tutor.reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2 space-x-2">
                    <RatingStars rating={review.rating} />
                    <span className="font-semibold text-gray-800">{review.student}</span>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Availability</h2>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
