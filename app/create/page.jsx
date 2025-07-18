"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import { Button } from "../../components/ui/button";
import TopicInput from "./_components/TopicInput";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { toast } from "sonner";

function Create() {
    const { user } = useUser();
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleUserInput = (fieldName, fieldValue) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue,
        }));
    };

    const GenerateCourseOutline = async () => {
        if (!formData.topic) {
            toast.error("Please enter a topic before generating!");
            return;
        }

        const courseId = uuidv4();
        setLoading(true);

        try {
            const result = await axios.post("/api/generate-course-outline", {
                courseId: courseId,
                ...formData,
                createdBy: user?.primaryEmailAddress?.emailAddress,
            });
            toast.success("Please wait, your course is generating!");
            router.replace("/dashboard");
        } catch (error) {
            toast.error("Failed to generate course. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7] px-4 py-10">
            <div className="text-center mb-10">
                <h2 className="font-extrabold text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#FFD85E] via-[#FFB800] to-[#3D4E6D] text-transparent bg-clip-text">
                    Build Your Personal Study Material
                </h2>

                <p className="text-gray-600 text-lg max-w-xl mx-auto">
                    Fill in the details to generate personalized content for your next learning journey.
                </p>
            </div>

            <div className=" w-full max-w-3xl  p-6 md:p-10 transition-all duration-300 ease-in-out">
                {step === 0 ? (
                    <SelectOption
                        selectedStudyType={(value) => handleUserInput("courseType", value)}
                    />
                ) : (
                    <TopicInput
                        setDifficultyLevel={(value) =>
                            handleUserInput("difficultyLevel", value)
                        }
                        setTopic={(value) => handleUserInput("topic", value)}
                    />
                )}

                <div className="flex justify-between items-center mt-16">
                    {step !== 0 ? (
                        <Button
                            variant="outline"
                            onClick={() => {
                                setStep(step - 1);
                                if (step - 1 === 0) {
                                    setFormData((prev) => ({
                                        ...prev,
                                        courseType: "",
                                    }));
                                }
                            }}
                            className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700"
                        >
                            Previous
                        </Button>
                    ) : (
                        <span className="invisible">-</span>
                    )}

                    {step === 0 ? (
                        <Button
                            onClick={() => setStep(step + 1)}
                            disabled={!formData.courseType}
                            className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${formData.courseType
                                ? "bg-[#FFD85E] hover:bg-[#FFB800] text-[#3D4E6D]"
                                : "bg-gray-300 text-gray-600 cursor-not-allowed"
                                }`}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            onClick={GenerateCourseOutline}
                            disabled={!formData.topic || loading}
                            className={`px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${!formData.topic || loading
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : "bg-[#FFD85E] hover:bg-[#FFB800] text-[#3D4E6D]"
                                }`}
                        >
                            {loading ? <Loader className="animate-spin" /> : "Generate"}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Create;
