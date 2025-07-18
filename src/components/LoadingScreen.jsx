import React, { useState, useEffect } from "react";
export const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState("");
    const fullText = "</> Loading.....";
    useEffect(() => {
        let index = 1;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 2000); // Delay before calling onComplete
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            
            
          {/*insert Image */}
            <img
                src="/IMG.jpg"
                alt="My Profile"
                className="w-50 h-50 rounded-full border-5 border-bg-gradient-to-r from-blue-500 to-purple-400 shadow-lg"
            />

            <div className="mb-4 text-4xl font-mono font-bold">
                My Portfolio <span className="animate-blink ml-1"></span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
            <p>{text}</p>
        </div>
    );
};  