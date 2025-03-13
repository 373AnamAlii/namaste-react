<!DOCTYPE html>
<html lang="en">
  <!-- Creating basic html program using  React-->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>
  {/*adding react cdn links inside our project, so that react can be used 
   These links contain plain js code.We have got react inside our project using these links.
   As soon as we injected the react code in our project,if you go to the browser console and write react then we see details of react i.e func and methods that we can use.
   First file is core react file, second is react dom which we need to modify the dom.
   Second is bridge between react and browsers. 
*/}
  <body>
    <div id="root"></div>
    {/*<!-- putting heading inside the div id root after creating the heading
   we need to tell react what is the root where you need to render , 
    i)so create a root to do all DOM manipulations
    ii)render that root 
    Creating  element is the work of react i.e first link (it is core react thing)
    creating root is the work of react dom i.e second link(putting h1 into browser  will require the use of ReactDom)
   -->*/}
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    {/*<!-- i) We created a  h1 tag with hello world from react inside it, we used React.createElement for it
         ii)We created a root for our react library, we can now render anything inside this root.(all react code will run inside root, we will render everything inside root)
         iii)We used ReactDom.render to render the h1 tag inside the root.
        -->*/}
    <script>
      const heading = React.createElement("h1", {}, "Hello world from React!");
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);
    </script>
  </body>
</html>

{/*<!-- its not a good way to write the react code inside the script tag, so create js files to write react code-->
*/}