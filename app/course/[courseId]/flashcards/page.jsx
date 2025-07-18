"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FlashcardItem from "./components/FlashCardItems";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../components/ui/carousel";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

function Flashcards() {
    const { courseId } = useParams();
    const [flashCards, setFlashCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);
    const [api, setApi] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        GetFlashCards();
    }, []);

    useEffect(() => {
        if (!api) return;
        api.on("select", () => setIsFlipped(false));
    }, [api]);

    const GetFlashCards = async () => {
        try {
            setIsLoading(true);
            const result = await axios.post("/api/study-type", {
                courseId: courseId,
                studyType: "Flashcard",
            });

            const content = result.data?.content;
            let parsedContent = [];
            if (typeof content === "string") {
                parsedContent = JSON.parse(content);
            } else if (Array.isArray(content)) {
                parsedContent = content;
            }

            setFlashCards(parsedContent);
        } catch (error) {
            toast.error("Failed to load flashcards");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick = () => setIsFlipped((prev) => !prev);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white">
                <ClipLoader size={50} color="#FFD85E" />
            </div>
        );
    }

    return (
        <div className="p-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#3D4E6D]">Flashcards</h2>
            <p className="text-gray-500 mb-6">Tap to flip and learn quickly!</p>

            {flashCards.length === 0 ? (
                <p className="text-gray-400">No flashcards available yet.</p>
            ) : (
                <div>
                    <Carousel setApi={setApi}>
                        <CarouselContent>
                            {flashCards.map((flashcard, index) => (
                                <CarouselItem key={index} className="flex justify-center">
                                    <FlashcardItem
                                        isFlipped={isFlipped}
                                        handleClick={handleClick}
                                        flashcard={flashcard}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center gap-4 mt-4">
                            <CarouselPrevious className="bg-[#FFD85E] hover:bg-[#FFB800] text-[#3D4E6D] px-4 py-2 rounded-full" />
                            <CarouselNext className="bg-[#FFD85E] hover:bg-[#FFB800] text-[#3D4E6D] px-4 py-2 rounded-full" />
                        </div>
                    </Carousel>
                </div>
            )}
        </div>
    );
}

export default Flashcards;
