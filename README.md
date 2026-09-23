
# React-ToDoList

This is a dynamic and user-friendly Todo List web app built with **React**. Users can add multiple task categories (headings) and insert multiple task items under each heading.

## Features

- Add and delete **task headings** (e.g., Grocery, Office Work)
- Add and delete **individual tasks** under each heading
- All form inputs are fully controlled using React's `useState`
- Clean CSS layout with responsive flexbox styling

## Folder Structure

```

React-ToDoList/
├── public/
├── src/
│   ├── Components/
│   │   ├── TodoList.jsx     # Main React component handling state and rendering
│   │   └── TodoList.css     # All styles related to the Todo List UI
│   ├── App.jsx              # Root component that renders <TodoList />
│   └── index.css            # Global styles
├── index.html               # HTML template used by Vite
├── package.json             # Project dependencies and scripts
└── vite.config.js           # Vite configuration

````

## How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Helia-Karisani/React-ToDoList.git
   cd React-ToDoList
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173/`




