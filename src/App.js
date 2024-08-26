import React, { useState } from 'react';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 shadow-lg">
        <div className="text-white text-center text-2xl font-bold">
          WritixAI Task
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-800 to-gray-700 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <ul className="mt-20 text-gray-200 space-y-4 p-4">
            <li className="hover:bg-gray-600 p-2 rounded">Option 1</li>
            <li className="hover:bg-gray-600 p-2 rounded">Option 2</li>
            <li className="hover:bg-gray-600 p-2 rounded">Option 3</li>
            <li className="hover:bg-gray-600 p-2 rounded">Option 4</li>
            <li className="mt-4">
              <div className="bg-gray-500 rounded-full h-2.5 mt-10">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-gray-300 text-sm mt-2">Progress</p>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64 p-8 bg-gray-900">
          {/* Burger Button */}
          <button
            className="fixed top-4 left-4 text-gray-200 bg-gray-700 px-2 py-1 rounded-md focus:outline-none"
            onClick={toggleSidebar}
          >
            ☰
          </button>

          {/* Search Bar and Categories Dropdown */}
          <div className="flex justify-between items-center mb-8">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              className="p-2 w-1/3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-800 text-gray-200"
            />
            {/* Categories Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="p-2 w-1/4 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-800 text-gray-200"
            >
              <option value="All">All Categories</option>
              <option value="Category1">Category 1</option>
              <option value="Category2">Category 2</option>
              <option value="Category3">Category 3</option>
            </select>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="bg-gradient-to-r from-blue-900 to-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-green-400 text-xl font-bold">Feature {i + 1}</h2>
                <p className="text-gray-200 mt-2">This is the description of feature {i + 1}.</p>
                <button className="mt-4 bg-green-500 text-gray-900 px-4 py-2 rounded-md font-bold hover:bg-green-600">
                  Click Here
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
