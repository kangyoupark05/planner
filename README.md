Planner:
A React-based task management application that allows users to create, organize, and track tasks. Users can assign categories and due dates to tasks, filter tasks by category, and view tasks in a calendar. The app stores tasks locally using `localStorage` for persistent task management.

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install
To Run Test Suite:
npm test
To Start Server:
npm start
To Visit App:
http://localhost:3000/

Reflection:
This project started as a side project to deepen my understanding of React, particularly with state management using hooks (useState, useEffect) and interacting with localStorage for data persistence. The goal was to build a simple, user-friendly task manager that supports both task categorization and a calendar view for better task tracking.

Challenges:
One of the main challenges was integrating the calendar view (react-calendar) with the task list and ensuring tasks are displayed accurately based on their due dates. Managing state across multiple components, especially when toggling task completion or filtering tasks by category, was another key learning experience.

Tools Used:
React: The core of the application, allowing efficient UI updates based on the state of tasks.
react-calendar: Integrated to provide a calendar-based view for users to see tasks due on specific dates.
localStorage: Used to persist task data across sessions so that users don’t lose tasks when they refresh the page or close the browser.
CSS: For responsive UI styling and ensuring a clean, user-friendly interface.
