import React from "react";


const Button = ({label, url}) => {
    return (
        <a href={url} className="btn">{label}</a>
    );
};
export default Button;