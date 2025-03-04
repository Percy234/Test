import React from "react";
import "../css/button.css";

const Button = ({label, url, link, icon, type, onClick}) => {
    if (link) {
        return (
            <a id="a-component" href={url} className="button">
                {label}
            </a>
        );
    }
    return (
        <button id="button-component" className={`${type} button`} onClick={onClick}>
            {icon}
            {label}
        </button>
    );
    
};
export default Button;