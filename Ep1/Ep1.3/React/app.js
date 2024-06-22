{
  /* Creating nested div along with siblings h1 and h2 structure in react
   *
   *
   *
   *
   *
   * <div id="parent">
   *     <div id="child">
   *       <h1>I'm h1</h1>
   *       <h2>I'm h2</h2>
   *     </div>
   * </div>
   *
   *
   *
   */
}

{
  /*  To create siblings :
         The third arg to React.createElement is converted to an array.
         So third arg can be a single child or an array of different children.
        So we wrap both h1 and h2 createElement inside [] brackets
         */
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
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

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
