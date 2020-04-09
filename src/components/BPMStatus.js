import React from "react";

const BPMStatus = ({ range }) => {
    return (
        <h1 className="f1 gray">
            {range}
            &nbsp;
            <span className="green">bpm</span>
        </h1>
    );
};

export default BPMStatus;