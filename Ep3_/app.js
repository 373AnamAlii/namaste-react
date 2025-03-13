import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

//using pure react
/*
const heading=React.createElement("h1",{id:"heading"},"Namaste React");
console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);



// Using JSX  -HTML like syntax

//React Element
const Heading = (
  <h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX🔥
  </h1>
)



const Title = () => (
  <h1 className="head" tabIndex="3">
    Namaste React Title component
  </h1>
);

const elem = <span>React Element</span>;

*/
const Title = () => (
  <h1 className="head" tabIndex="3">
    Namaste React Element
  </h1>
);


const HeadingComponent1 = () => (
  <div id="container">
    {Title()}
    <h1 className="heading"> Namaste React Functional Component1</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
