{
  /* We are going to write production ready code   */
}

{
  /*  
  - There are a lot of other libraries and packages which make our app fast and production ready
  - We will now see how we will get those packages in our app
  
  -NPM : Does not stand for node package manager. It does not have a full form.
  - npm manages packages but does not stand for node package manager.
  -npm is a standard repository for all the packages     
  - we can use packages using npm

  -create react app automatically has npm inside it.
  -lets make our project use npm
  -in terminal write npm init and further cmds

  -after all the commands,package.json is created.
  -package.json is a configuration for our npm likename desc,version
  -Now we can get our packages(dependencies) into our project.
  -dependencies are packages which our project needs to run
  -most imp package is a bundler. Our whole code i.e html,css and js files needs to be bundled together(minified,compressed,cleaned).Bundler helps us do all these things.
  -most popular bundler is webpack,parcel,weed
  -Bundler basically packages your app rpoperly so that it can be shipped to production.
  -create react app behind the scene uses webpack bundler and babel.
  -we will use parcel as bundler in our code.
  - we can install parcel easily as we have npm now : npm install -D parcel
  -There are two types of packages that we can install,one is the dev dependency and another is the normal dependency.
      -dev dependency is used only for development and not for production.
      -normal dependency can be used in production also
  - for dev dependency we give -D

  - package-lock.json keeps the track of exact version i.e 2.8.3
  -package.json will store ^2.8.3 as the  version, where ^means do minor updates to the version if NEW VERSION present.It keeps the approx version.
  -package-lock.json is used for production and it keeps a track of the exact version and locks it
  -package.json is used for development and can have a carat or tilde ^~
  -we can install packages using npm install package-name
  -we can install all the packages at once using npm install
  -We can also store the version in package.json as ~2.8.3, it will do major updates to the version automatically which can break few things in our app.
  - package-lock.json has to verify whatever is their in my machine is the same version that is deployed to production.It keeps track of exact version of all the dependencies.
  - node modules contain all the code that we fetched from npm
  -when we did npm install parcel, all the code of parcel was fetched and was put inside npm modules.Node modules is like a database where all our packages exist.
  - we have parcel along with their own dependencies which in turn have their own dependency this is called transitive dependency in node modules.
  
  -Every dependency will have its own package.json and has its own dependencies
  
  *******  IMP   ********
  -we will have a file called .gitignore which will not put the files  into production or git. So put files which you don't want to be pushed inside gitignore
  - we will put node modules inside gitignore file as it is quiet bulky and is 
      -we don't need to push node modules into git or production because if we have package.json or package-lock.json, we can regenerate our node modules.
      -
  -we should push package.json and package-lock.json into git as they maintain a note of what all dependencies our project needs.
     -
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
