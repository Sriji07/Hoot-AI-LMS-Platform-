"use client";
import { Button } from "../../../../components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ViewNotes() {
    const { courseId } = useParams();
    const [notes, setNotes] = useState([]);
    const [stepCount, setStepCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        GetNotes();
    }, []);

    const GetNotes = async () => {
        try {
            const result = await axios.post("/api/study-type", {
                courseId: courseId,
                studyType: "notes",
            });

            const parsedNotes = result?.data?.notes.map((note) => ({
                ...note,
                notes: note.notes,
            }));

            setNotes(parsedNotes || []);
        } catch (error) {
            console.error("Failed to fetch notes:", error);
        }
    };

    const styleContent = (content) => {
        content = content
            .replace(/^```html/g, "")
            .replace(/'''$/g, "")
            .trim();

        return content
            .replace(
                /<h3>/g,
                `<h3 style="font-size:24px; font-weight:700; color:#3D4E6D; margin-bottom:15px;">`
            )
            .replace(
                /<h4>/g,
                `<h4 style="font-size:20px; font-weight:600; color:#4A5C7D; margin-bottom:10px;">`
            )
            .replace(
                /<p>/g,
                `<p style="font-size:16px; color:#555; line-height:1.8; margin-bottom:15px;">`
            )
            .replace(
                /<li>/g,
                `<li style="font-size:16px; color:#444; line-height:1.8; margin-bottom:10px;">`
            );
    };

    if (!Array.isArray(notes)) {
        return (
            <div className="text-center text-gray-500 mt-20">No notes available</div>
        );
    }

    return notes.length > 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#F9FAFB] to-[#EFF1F5] px-6 py-10">
            {/* Navigation Buttons + Progress Bar */}
            <div className="flex items-center gap-4 mb-8 w-full max-w-3xl">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStepCount((prev) => Math.max(prev - 1, 0))}
                    disabled={stepCount === 0}
                    className="bg-white shadow-md hover:bg-gray-100 text-[#3D4E6D]"
                >
                    Previous
                </Button>
                <div className="flex-1 flex gap-1">
                    {notes.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 flex-1 rounded-full ${index <= stepCount ? "bg-[#FFD85E]" : "bg-gray-200"
                                }`}
                        ></div>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                        setStepCount((prev) => Math.min(prev + 1, notes.length - 1))
                    }
                    disabled={stepCount === notes.length - 1}
                    className="bg-white shadow-md hover:bg-gray-100 text-[#3D4E6D]"
                >
                    Next
                </Button>
            </div>

            {/* Note Content */}
            <div className=" shadow-lg rounded-xl p-8 w-full max-w-3xl">
                <div
                    className="prose prose-lg text-gray-700"
                    dangerouslySetInnerHTML={{
                        __html: styleContent(notes[stepCount].notes),
                    }}
                ></div>

                {stepCount === notes.length - 1 && (
                    <div className="flex flex-col items-center gap-6 mt-10">
                        <h2 className="text-xl font-semibold text-[#3D4E6D]">
                            🎉 End of Notes
                        </h2>
                        <Button
                            onClick={() => router.back()}
                            variant="default"
                            size="lg"
                            className="bg-[#FFD85E] hover:bg-[#FFB800] text-[#3D4E6D] font-bold"
                        >
                            Go to Course Page
                        </Button>

                    </div>


                )}

            </div>

        </div>
    ) : (
        <div className="text-center text-gray-500 mt-20">No notes available</div>
    );
}

export default ViewNotes;
