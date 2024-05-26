import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "Head",
    className: "myHead",
    style: {
      color: "blue",
    },
  },
  "Namaste React"
);
const newHead = React.createElement(
  "h1",
  {
    id: "class1",
    style: {
      fontSize: "40px",
    },
  },
  "Hello World"
);

const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h1", {}, "Heading 2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
