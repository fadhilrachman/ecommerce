import React, { useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';


function ToggleButton() {
    const [showContent, setShowContent] = useState(true);
    const [isClicked, setIsClicked] = useState(false);


    const toggleContent = () => {
        setShowContent(!showContent);

        if (toggleContent) {
            setIsClicked(!isClicked);
        }
    };
    
        

    return (
        <div className="relative bg-[#EEEEEE] flex flex-col">
            { showContent && <p > <Navbar /> </p>}
            <div className="relative bottom-0 flex justify-center  text-[#00ADB5] items-center">
                <button className="rounded-b text-lg px-10 bg-[#222831]" onClick={toggleContent}>
                <FontAwesomeIcon className="animate-bounce" icon={isClicked ? faChevronDown : faAngleDoubleUp } />
                </button>
            </div>
        </div>
    );
}

export default ToggleButton;
