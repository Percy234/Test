import React from "react";
import "../css/button.css";

const Button = ({label, url, link, icon, type}) => {
    if (link) {
        return (
            <a id="a-component" href={url} className="button">
                {label}
            </a>
        );
    }
    return (
        <button id="button-component" className={`${type} button`}>
            {icon}
            {label}
        </button>
    );
    
};
export default Button;