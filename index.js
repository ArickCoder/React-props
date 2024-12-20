import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

ReactDOM.render(<p>Hello</p>, document.getElementById('root')); 

const myElement = <h1>My score is {10*9}</h1>
ReactDOM.render(myElement, document.getElementById('root2')); 

function Hello(props) {
    return <h1>Hello World!</h1>
}

const container = document.getElementById('root3');
const root = ReactDOM.createRoot.(container);
root.render(<Hello />);

