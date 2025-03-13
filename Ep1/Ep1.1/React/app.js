{
  /*   We have divided the react code into a new js file. Now both the html and js file work together to print 
  hello world from react 
{} obj in createElement is used to give attributes to your tag,here for h1 tag we give its id inside {}
    
    */
}

const heading = React.createElement(
  "h1",
  { id: "heading", xyz:"abc" },
  "Hello world from React!"
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
