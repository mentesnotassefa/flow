import React from 'react';

const App = () => {
  // Mock function for search
  const handleSearch = (e) => {
    e.preventDefault();
    alert('Simulating search for: ' + e.target.elements.search.value);
  };

  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  );

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white p-4 shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="font-bold text-2xl text-indigo-600">
            TutorConnect
          </a>
          <ul className="flex space-x-6 items-center">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Find a Tutor</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Become a Tutor</a></li>
            <li><a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Login/Signup</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white py-24 px-4 text-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://placehold.co/1920x800/2a1a47/ffffff?text=Collaborative+Learning)' }}></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">Unlock Your Potential</h1>
          <p className="text-xl mb-8">Find the perfect tutor to help you achieve your goals.</p>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
            <div className="relative w-full sm:w-2/3">
              <input
                type="text"
                name="search"
                placeholder="Search for subjects, tutors, or keywords..."
                className="w-full px-6 py-4 text-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition"
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* For Students */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">For Students</h2>
            <p className="text-gray-600 mb-6">Find the perfect tutor and start learning today.</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3"><span className="text-green-500 text-xl">✅</span> <span>Expert Tutors</span></li>
              <li className="flex items-center space-x-3"><span className="text-green-500 text-xl">✅</span> <span>Flexible Scheduling</span></li>
              <li className="flex items-center space-x-3"><span className="text-green-500 text-xl">✅</span> <span>Improve Grades</span></li>
            </ul>
            <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Find a Tutor
            </button>
          </div>

          {/* For Tutors */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-green-500">For Tutors</h2>
            <p className="text-gray-600 mb-6">Share your knowledge and earn money on your own schedule.</p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3"><span className="text-indigo-500 text-xl">⭐</span> <span>Set Your Own Rates</span></li>
              <li className="flex items-center space-x-3"><span className="text-indigo-500 text-xl">⭐</span> <span>Manage Your Schedule</span></li>
              <li className="flex items-center space-x-3"><span className="text-indigo-500 text-xl">⭐</span> <span>Connect with Students</span></li>
            </ul>
            <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              Become a Tutor
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full shadow-lg mb-4 text-indigo-600">
                <SearchIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Search & Connect</h3>
              <p className="text-gray-600">Find the perfect tutor by subject, price, and availability.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full shadow-lg mb-4 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Schedule & Learn</h3>
              <p className="text-gray-600">Book a session at a time that works for you and get started.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full shadow-lg mb-4 text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.896a6 6 0 1 0-6.953 0"/><path d="M12 20v2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Achieve Your Goals</h3>
              <p className="text-gray-600">Get the personalized help you need to succeed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 TutorConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
