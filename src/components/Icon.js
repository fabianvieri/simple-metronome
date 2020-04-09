import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Icon = ({ iconState }) => {
    return (
        <FontAwesomeIcon icon={iconState ? faPause : faPlay} className="white f3" />
    );
}

export default Icon;