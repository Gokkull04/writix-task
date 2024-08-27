
# WritixAI Task - Responsive Web Application

## Overview
This is a responsive web application created using React and Tailwind CSS. The project features a sidebar with navigation options, a customizable light/dark theme, a search bar, category selection, and a dynamic card layout. The layout adjusts automatically based on screen size, providing an optimal viewing experience for mobile, iPad, and desktop users.

## Features
- **Responsive Design:** 
  - One card per row in mobile view.
  - Two cards per row in iPad view.
  - Three cards per row in desktop view.
- **Sidebar:**
  - A collapsible sidebar with options, visible on all screen sizes.
  - Toggled by a burger button on smaller screens.
- **Theme Toggle:** 
  - Switch between day mode (light) and night mode (dark) with a single button click.
- **Search Bar and Category Dropdown:** 
  - Filter content based on user input and selected categories.
- **Progress Bar:** 
  - Displayed inside the sidebar, visually indicating progress.

## Technology Stack
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **JavaScript (ES6):** The programming language used for the frontend logic.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gokkull04/writix-task.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd writix-task
   ```

3. **Install dependencies:**
   Make sure you have Node.js installed. Run the following command to install the required packages:
   ```bash
   npm install
   ```

4. **Start the development server:**
   To start the application, run the following command:
   ```bash
   npm start
   ```

5. **View in Browser:**
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure
- `src/`
  - `App.js`: Main component that handles layout, theme toggling, sidebar, and card display.
  - `index.js`: Entry point for the React application.
  - `index.css`: Global styles applied to the app.

## Customization
- **Theme Toggling:** 
  Modify the `toggleTheme` function in `App.js` to change the styles for the light and dark modes.
- **Card Content:** 
  Update the content of the cards by changing the `Array.from({ length: 6 }, (_, i)` section inside the `App.js` file.
- **Category Options:** 
  Customize the categories by modifying the `<select>` element in `App.js`.

## Responsive Design
The app uses Tailwind CSS grid utilities to achieve a responsive layout. The following classes are used:
- `grid-cols-1`: For mobile view (1 card per row).
- `md:grid-cols-2`: For iPad view (2 cards per row).
- `lg:grid-cols-3`: For desktop view (3 cards per row).

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact
For any questions or suggestions, feel free to reach out:

- **Email:** gokkull04@gmail.com
- **GitHub:** https://github.com/Gokkull04
