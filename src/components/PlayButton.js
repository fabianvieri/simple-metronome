import React from "react";

const PlayButton = ({ onPlay, children }) => {
    return (
        <button type="button" className="bg-green bn br-100 pa4 pointer dim ml-auto" onClick={onPlay}>
            {children}
        </button>
    );
}

export default PlayButton;