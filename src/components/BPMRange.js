import React from "react";

const BPMRange = ({ rangeChange }) => {
    return (
        <input type="range" className="slider" max="218" min="40" step="1" onInput={rangeChange}></input>
    );
}

export default BPMRange;