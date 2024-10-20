const heading =React.createElement("h1",{id:"heading"},"Hello world from React");


const parent = React.createElement("div",{id:"parent"},"i am a parent for this"
    
    )


console.log(parent);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)