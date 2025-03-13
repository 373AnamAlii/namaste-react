{
  /* Creating nested div structure in react
   *
   *
   *
   *
   *
   * <div id="parent">
   *     <div id="child">
   *       <h1></h1>
   *     </div>
   * </div>
   *
   *
   *
   */
}

{
  /* We will pass the children of that div i.e another div as the third argument of createElement.Then third argument of div id="child"
  will again be its children which is an h1 tag, its third arg will be the content of h1 tag  */
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm an h1 tag")
  )
);

{
  /*parent here is an obj, which is an react element 
  This obj is converted to HTML that the browser understands
  
  ReactElement(Object) => HTML(Browser understands)
  
  The child div is again an obj,its children is again an h1 tag
  */
}

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);
console.log(heading); //Heading is a react element(normal js element)

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //this render method takes the object and convert it into h1 or div or whatver the obj is to its respective tag and put it up on the DOM
