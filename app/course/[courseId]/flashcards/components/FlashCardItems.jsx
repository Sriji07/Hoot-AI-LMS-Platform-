"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function FlashcardItems({ flashcard }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => setIsFlipped(!isFlipped);

    return (
        <div className="flex items-center justify-center mt-10">
            <motion.div
                className="relative"
                onClick={handleClick}
                style={{
                    width: "320px",
                    height: "380px",
                    perspective: "1200px",
                }}
            >
                <motion.div
                    className="absolute w-full h-full rounded-xl shadow-xl"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                    style={{
                        transformStyle: "preserve-3d",
                        cursor: "pointer",
                    }}
                >
                    {/* Front Side */}
                    <div
                        className="absolute w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD85E] to-[#FFB800] text-[#3D4E6D] text-2xl font-extrabold shadow-lg"
                        style={{
                            backfaceVisibility: "hidden",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                        }}
                    >
                        <div className="p-6 text-center leading-snug">
                            {flashcard?.front || "Question"}
                        </div>
                    </div>

                    {/* Back Side */}
                    <div
                        className="absolute w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-[#3D4E6D] to-[#1F2A44] text-white text-2xl font-bold shadow-xl"
                        style={{
                            transform: "rotateY(180deg)",
                            backfaceVisibility: "hidden",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                        }}
                    >
                        <div className="p-6 text-center leading-snug">
                            {flashcard?.back || "Answer"}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default FlashcardItems;
