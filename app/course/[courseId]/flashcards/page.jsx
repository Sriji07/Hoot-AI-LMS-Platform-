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

            console.log("Flashcards API response:", result.data);

            // ✅ Fix: If API returns an object with content as string, parse it
            const content = result.data?.content;

            let parsedContent = [];
            if (typeof content === "string") {
                parsedContent = JSON.parse(content);
            } else if (Array.isArray(content)) {
                parsedContent = content;
            }

            setFlashCards(parsedContent);
        } catch (error) {
            console.error("Error fetching flashcards:", error);
            toast.error("Failed to load flashcards");
        } finally {
            setIsLoading(false);
        }
    };


    const handleClick = () => setIsFlipped((prev) => !prev);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader size={50} color="#3498db" />
            </div>
        );
    }

    return (
        <div>
            <h2 className="font-bold text-2xl mb-2">Flashcards</h2>
            <p className="mb-4">The ultimate tool to lock in concepts!</p>

            {flashCards.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                    No flashcards available yet. Try generating them!
                </div>
            ) : (
                <div className="mt-8">
                    <Carousel setApi={setApi}>
                        <CarouselContent>
                            {flashCards.map((flashcard, index) => (
                                <CarouselItem
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    <FlashcardItem
                                        isFlipped={isFlipped}
                                        handleClick={handleClick}
                                        flashcard={flashcard}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            )}
        </div>
    );
}

export default Flashcards;
