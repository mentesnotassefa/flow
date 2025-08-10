import React from 'react';

const App = () => {
  const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera-off"><path d="M12.9 5H19a2 2 0 0 1 2 2v9.3m-1.7-1.7a2 2 0 0 1-2.3 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.2m7.8 11V9M2 2l20 20"/><circle cx="9" cy="9" r="2"/></svg>
  );

  return (
    <div className="font-sans bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tutor Profile Setup</h1>
        
        <form className="space-y-8">
          {/* Personal Details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Full Name</label>
                <input type="text" className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600" placeholder="Your full name" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Profile Picture</label>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    <CameraIcon />
                  </div>
                  <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
                    Upload Photo
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Contact Email</label>
                <input type="email" className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600" placeholder="your@email.com" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Phone Number</label>
                <input type="tel" className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600" placeholder="(555) 555-5555" />
              </div>
            </div>
          </div>

          {/* Educational Credentials */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Educational Credentials</h2>
            <p className="text-gray-500 mb-4">Upload your degrees or certifications for verification.</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-500 mb-2">Drag and drop files here, or</p>
              <input type="file" className="hidden" id="file-upload" multiple />
              <label htmlFor="file-upload" className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Browse Files
              </label>
            </div>
          </div>

          {/* Subjects Taught */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subjects Taught</h2>
            <div className="flex flex-wrap gap-2">
              {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Computer Science'].map((subject) => (
                <span key={subject} className="px-4 py-2 rounded-full border border-indigo-600 bg-indigo-50 text-indigo-700 font-medium cursor-pointer hover:bg-indigo-100 transition">
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & Teaching Methods */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing & Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Hourly Rate ($)</label>
                <input type="number" className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600" placeholder="e.g., 50" />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Teaching Methods</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-indigo-600" /><span>In-person</span></label>
                  <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-indigo-600" /><span>Online</span></label>
                  <label className="flex items-center space-x-2"><input type="checkbox" className="rounded text-indigo-600" /><span>Hybrid</span></label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bio/Teaching Philosophy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bio / Teaching Philosophy</h2>
            <textarea
              className="w-full h-32 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-600"
              placeholder="Tell students about your experience and teaching style..."
            ></textarea>
          </div>

          {/* Availability (mocked) */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Availability</h2>
            <p className="text-gray-500 mb-4">Your availability calendar editor would be here.</p>
            <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
              [Interactive Calendar Editor]
            </div>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
