import { Progress } from "../../../../components/ui/progress";
import Image from "next/image";
import React from "react";

function CourseIntroCard({ course }) {
    return (
        <div className="flex flex-col md:flex-row gap-6 items-center bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 md:p-10 transition-transform transform hover:scale-[1.02] hover:shadow-2xl">

            {/* Icon */}
            <div className="flex-shrink-0 bg-gradient-to-br from-[#FFD85E] to-[#FFB800] p-4 rounded-full shadow-md">
                <Image src={"/knowledge.png"} alt="knowledge" width={80} height={80} />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="font-extrabold text-2xl md:text-3xl text-[#3D4E6D]">
                    {course?.courseLayout?.courseTitle || "Untitled Course"}
                </h2>

                <p className="text-gray-600 mt-2 text-base leading-relaxed line-clamp-3">
                    {course?.courseLayout?.courseSummary || "No description available."}
                </p>

                {/* Progress */}
                <Progress className="mt-4 h-3 rounded-full bg-gray-200" value={50} />

                {/* Total Chapters */}
                <h2 className="mt-4 text-lg font-semibold text-[#3D4E6D] bg-[#FFF8E7] px-4 py-2 rounded-lg inline-block shadow-sm">
                    Total Chapters:{" "}
                    <span className="font-bold text-[#FFB800]">
                        {course?.courseLayout?.chapters?.length || 0}
                    </span>
                </h2>
            </div>
        </div>
    );
}

export default CourseIntroCard;
