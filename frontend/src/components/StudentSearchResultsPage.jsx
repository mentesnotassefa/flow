import React from 'react';

const App = () => {
  const tutors = [
    { name: 'Hane Turt', subjects: ['Math', 'Science'], price: 100, rating: 4.5, reviews: 15, image: 'https://placehold.co/100x100/e0e7ff/4338ca?text=HT' },
    { name: 'Commilere', subjects: ['Math', 'English'], price: 120, rating: 4.8, reviews: 18, image: 'https://placehold.co/100x100/ffe4e6/be185d?text=C' },
    { name: 'Ham Tury', subjects: ['Math', 'Physics'], price: 100, rating: 5.0, reviews: 25, image: 'https://placehold.co/100x100/dbeafe/1d4ed8?text=HT' },
    { name: 'Bum Tups', subjects: ['Math', 'History'], price: 100, rating: 4.9, reviews: 13, image: 'https://placehold.co/100x100/fff7e6/d97706?text=BT' },
    { name: 'Eombitien', subjects: ['Math', 'Biology'], price: 100, rating: 4.2, reviews: 21, image: 'https://placehold.co/100x100/d1fae5/047857?text=E' },
    { name: 'Alw Tups', subjects: ['Math', 'Computer Science'], price: 100, rating: 4.7, reviews: 12, image: 'https://placehold.co/100x100/e0e7ff/4338ca?text=AT' },
  ];

  const Star = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-star ${filled ? 'text-yellow-400' : 'text-gray-300'}`}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  );

  const RatingStars = ({ rating }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating} />
      ))}
    </div>
  );

  const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
  );

  return (
    <div className="font-sans bg-gray-100 min-h-screen flex">
      {/* Sidebar - Filters */}
      <aside className="w-1/4 bg-white p-8 border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
          <FilterIcon /> <span>Student results</span>
        </h2>
        <div className="space-y-6">
          {/* Subject Filter */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-700">Subject</h3>
            <div className="flex flex-col space-y-1">
              <label className="flex items-center space-x-2 text-gray-600"><input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" /><span>Math</span></label>
              <label className="flex items-center space-x-2 text-gray-600"><input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" /><span>Science</span></label>
              <label className="flex items-center space-x-2 text-gray-600"><input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" /><span>English</span></label>
            </div>
          </div>
          {/* Price Range Filter */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-700">Price Range</h3>
            <input type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          </div>
          {/* Rating Filter */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-700">Rating</h3>
            <div className="flex space-x-2">
              <RatingStars rating={5} />
              <RatingStars rating={4} />
              <RatingStars rating={3} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Tutor Cards */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Tutor Tutors</h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search for tutors..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Search</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <img src={tutor.image} alt={tutor.name} className="w-20 h-20 rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{tutor.name}</h3>
                <p className="text-gray-500 text-sm">{tutor.subjects.join(', ')}</p>
                <div className="flex items-center space-x-2 my-2">
                  <RatingStars rating={tutor.rating} />
                  <span className="text-sm text-gray-600">({tutor.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-bold text-indigo-600">${tutor.price}<span className="text-sm text-gray-500 font-normal">/hr</span></div>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                Compare
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
