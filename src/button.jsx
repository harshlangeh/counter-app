import React from "react";

function MyButton({text, click}) {
    return (
        <button onClick={click}>{text}</button>
    );
    
}

export default MyButton