import React, { useState, useEffect } from 'react';

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDesktop, setIsDesktop] = useState(false);
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle screen size to determine if it is desktop or iPad view
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024); // lg and above (desktop)
  };

  useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize); // Listen to screen size changes
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
  }, []);

  // Toggle between day and night modes
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isNightMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
      {/* Navbar */}
      <nav className={`${isNightMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-400 to-blue-200'} p-4 shadow-lg`}>
        <div className="flex items-center ml-20">
          <div className={`${isNightMode ? 'text-white' : 'text-gray-800'} text-2xl font-bold text-center mx-auto`}>
            WritixAI-Task
          </div>
          <button
            onClick={toggleTheme}
            className={`${isNightMode ? 'bg-gray-700 text-gray-200' : 'bg-blue-300 text-gray-800'} px-4 py-2 rounded-md font-bold focus:outline-none`}
          >
            {isNightMode ? 'Day Mode' : 'Night Mode'}
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-64 ${isNightMode ? 'bg-gradient-to-b from-gray-800 to-gray-700' : 'bg-gradient-to-b from-blue-400 to-blue-200'} transform ${isSidebarOpen || isDesktop ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <ul className="mt-20 space-y-4 p-4">
            <li className={`hover:bg-${isNightMode ? 'gray-600' : 'blue-300'} p-2 rounded`}>Option 1</li>
            <li className={`hover:bg-${isNightMode ? 'gray-600' : 'blue-300'} p-2 rounded`}>Option 2</li>
            <li className={`hover:bg-${isNightMode ? 'gray-600' : 'blue-300'} p-2 rounded`}>Option 3</li>
            <li className={`hover:bg-${isNightMode ? 'gray-600' : 'blue-300'} p-2 rounded`}>Option 4</li>
            <li className="mt-4">
              <div className={`${isNightMode ? 'bg-gray-500' : 'bg-blue-300'} rounded-full h-2.5 mt-10`}>
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm mt-2">Progress</p>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className={`flex-1 p-8 ${isNightMode ? 'bg-gray-900' : 'bg-white'} ${isDesktop ? 'ml-64' : ''}`}>
          {/* Burger Button */}
          {!isDesktop && (
            <button
              className={`${isNightMode ? 'bg-gray-700 text-gray-200' : 'bg-blue-300 text-gray-800'} fixed top-4 left-4 px-2 py-1 rounded-md focus:outline-none`}
              onClick={toggleSidebar}
            >
              ☰
            </button>
          )}

          {/* Search Bar and Categories Dropdown */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              className={`${isNightMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'} p-2 w-full md:w-1/3 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {/* Categories Dropdown */}
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={`${isNightMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'} p-2 w-full md:w-1/4 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-500`}
            >
              <option value="All">All Categories</option>
              <option value="Category1">Category 1</option>
              <option value="Category2">Category 2</option>
              <option value="Category3">Category 3</option>
            </select>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className={`${isNightMode ? 'bg-gradient-to-r from-blue-900 to-gray-800' : 'bg-gradient-to-r from-blue-400 to-blue-200'} p-6 rounded-lg shadow-lg`}>
                <h2 className={`${isNightMode ? 'text-green-400' : 'text-blue-900'} text-xl font-bold`}>Feature {i + 1}</h2>
                <p className="mt-2">This is the description of feature {i + 1}.</p>
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
