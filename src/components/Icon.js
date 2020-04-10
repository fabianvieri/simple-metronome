import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ iconState }) => {
    return (
        <FontAwesomeIcon
            icon={iconState ? "pause" : "play"}
            className="white f3"
        />
    );
}

export default Icon;