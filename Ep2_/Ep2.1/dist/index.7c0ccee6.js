const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I'm an h1 tag of child1"),
        React.createElement("h2", {}, "I'm an h2 tag of child1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm an h1 tag of child2"),
        React.createElement("h2", {}, "I'm an h2 tag of child2")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "Hello world from React!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
