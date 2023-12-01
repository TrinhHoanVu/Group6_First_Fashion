import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";


function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, []);
    const scrollUP = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backToTopButton && (
                <button className='back-to-top-button'
                    onClick={scrollUP}  style={{cursor:'pointer'}}
                ><IoIosArrowUp /></button>
            )}
        </div>
    );
}

export default BackToTopButton;