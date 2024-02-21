
const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"This is the FIRST-ARRAY1 H1"),
React.createElement("h1",{},"This is from FIRST-ARRAY2 H1")]),React.createElement("div",{id:"child"},
[React.createElement("h1",{},"This is the SECOND-ARRAY-1 H1"),
React.createElement("h1",{},"This is from SECOND-ARRAY2 H1")])]);











const heading = React.createElement("h1",{id:"heading"},"Hello from React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);