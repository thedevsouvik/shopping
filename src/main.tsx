import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <h1 className="flex h-screen w-full items-center justify-center text-center text-5xl md:text-7xl">
      React
      <br />
      Shopping
      <br />
      Application
    </h1>
  );
}
