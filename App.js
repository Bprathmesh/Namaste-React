 // be mindful from where it is coming we gotta change from react to react dom
//  creating nested structure 
// incase to add siblings we can pass 3rd argument as array
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "children" },
    [React.createElement("h1", {}, "ShivJii"),React.createElement("h1", {}, "ShivJii")]
),React.createElement("div", { id: "children2" },
[React.createElement("h1", {}, "ShivJii"),React.createElement("h1", {}, "ShivJii")]
)]
);
// jsx dom to beautify the above ugly code
// ReactElement(Object)=>HTML(browser understands )
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

 const heading=React.createElement("h1",{id:"heading"},"prathmeShiv");
//  what is the object so it is the place where we give attributes to the class

//  root.render(heading);
 console.log(heading); //returns an object to us
//  props are children plus the attributes we pass in
// the above heading is not h1 tag but an object
 