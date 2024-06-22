{
  /* Creating nested div along with siblings h1 and h2 structure in react
   *
   *
   *
   *
   *
   * <div id="parent">
   *     <div id="child1">
   *       <h1>I'm h1</h1>
   *       <h2>I'm h2</h2>
   *     </div>
   *     <div id="child2">
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
         
        Now this structure's code looks complicated , so now we will use jsx to write code instead of this.
        
        */
}
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag of child1"),
    React.createElement("h2", {}, "I'm an h2 tag of child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag of child2"),
    React.createElement("h2", {}, "I'm an h2 tag of child2"),
  ]),
]);



const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
