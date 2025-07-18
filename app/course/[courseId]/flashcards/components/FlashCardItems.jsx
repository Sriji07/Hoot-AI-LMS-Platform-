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
                    width: "300px",
                    height: "350px",
                    perspective: "1000px",
                }}
            >
                <motion.div
                    className="absolute w-full h-full rounded-lg shadow-lg"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front Side */}
                    <div
                        className="absolute w-full h-full bg-primary text-white flex items-center justify-center rounded-lg cursor-pointer text-xl font-semibold"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        {flashcard?.front}
                    </div>

                    {/* Back Side */}
                    <div
                        className="absolute w-full h-full bg-white text-primary flex items-center justify-center rounded-lg cursor-pointer text-xl font-semibold"
                        style={{
                            transform: "rotateY(180deg)",
                            backfaceVisibility: "hidden",
                        }}
                    >
                        {flashcard?.back}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default FlashcardItems;
