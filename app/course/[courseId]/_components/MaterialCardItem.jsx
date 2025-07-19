import { Button } from "../../../../components/ui/button";
import axios from "axios";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const MaterialCardItem = ({ item, studyTypeContent, course, refreshData }) => {
    const [loading, setLoading] = useState(false);

    const isContentReady = () => {
        if (!studyTypeContent) return false;

        const content = studyTypeContent[item.type.toLowerCase()];
        if (!content) return false;

        if (item.type === "notes") {
            return content.length > 0;
        }

        return content.length > 0 && content.some((item) => item.content);
        console.log("Material Item Type:", item.type);

    };

    const GenerateContent = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);

            let chapters = "";
            course?.courseLayout?.chapters.forEach((chapter) => {
                chapters = chapter?.chapterTitle + "," + chapters;
            });

            await axios.post("/api/study-type-content", {
                courseId: course?.courseId,
                type: item.type,
                chapters: chapters,
            });

            refreshData(true);
            toast.success("Content generation started. Refresh after some time.");
        } catch (error) {
            console.error("Generation error:", error);
            toast.error(
                "Error generating content: " +
                (error.response?.data?.message || error.message)
            );
        } finally {
            setLoading(false);
        }
    };

    const contentReady = isContentReady();

    return (
        <Link href={`/course/${course?.courseId}${item.path}`} className="w-full">
            <div
                className={`flex flex-col items-center justify-between p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-2xl hover:scale-[1.02] backdrop-blur-md ${!contentReady && "opacity-70"
                    }`}
                style={{
                    width: "240px", // ✅ Fixed width
                    height: "320px", // ✅ Fixed height for uniform cards
                }}
            >
                {/* Status Badge */}
                <h2
                    className={`text-[10px] font-bold px-3 py-1 rounded-full mb-3 ${contentReady ? "bg-green-500 text-white" : "bg-gray-400 text-white"
                        }`}
                >
                    {contentReady ? "Ready" : "Generate"}
                </h2>

                {/* Icon */}
                <div className="bg-gradient-to-br from-[#FFD85E] to-[#FFB800] p-5 rounded-full shadow-md mb-4">
                    <Image src={item.icon} alt={item.name} width={60} height={60} />
                </div>

                {/* Title */}
                <h2 className="font-bold text-lg text-[#3D4E6D] text-center mb-2 line-clamp-1">
                    {item.name}
                </h2>
                <p className="text-gray-600 text-xs text-center mb-4 line-clamp-2">
                    {item.desc}
                </p>

                {/* Action Button */}
                {item.type === "QA" ? (

                    <Link href="/dashboard/upgrade">
                        <Button
                            className="mt-3 w-full text-gray-400"
                            variant="outline"
                        >
                            ⭐ Coming Soon
                        </Button>
                    </Link>

                ) : !contentReady ? (
                    <Button
                        className="mt-3 w-full"
                        variant="outline"
                        onClick={GenerateContent}
                    >
                        {loading && <RefreshCcw className="animate-spin" />}
                        Generate
                    </Button>
                ) : (
                    <Button className="mt-3 w-full" variant="outline">
                        View
                    </Button>
                )}

            </div>

        </Link>


    );
};

export default MaterialCardItem;
