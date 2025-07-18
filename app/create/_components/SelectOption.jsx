import Image from "next/image";
import React, { useState } from "react";

function SelectOption({ selectedStudyType }) {
    const Options = [
        { name: "Exam", icon: "/exam_1.png" },
        { name: "Job Interview", icon: "/job.png" },
        { name: "Practice", icon: "/practice.png" },
        { name: "Coding Prep", icon: "/code.png" },
        { name: "Other", icon: "/knowledge.png" },
    ];

    const [selectedOption, setSelectedOption] = useState();

    return (
        <div className="w-full text-center">
            {/* Heading */}
            <h2 className="text-center mb-6 text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFD85E] via-[#FFB800] to-[#FFD85E] text-transparent bg-clip-text">
                For which purpose do you want to generate study material?
            </h2>

            {/* Options Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {Options.map((option, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-sm flex flex-col items-center justify-center bg-white hover:shadow-xl hover:scale-105 
                        ${option.name === selectedOption
                                ? "border-[#FFD85E] bg-[#FFF8E7] shadow-md"
                                : "border-gray-200"
                            }`}
                        onClick={() => {
                            setSelectedOption(option.name);
                            selectedStudyType(option.name);
                        }}
                    >
                        <div className="w-20 h-20 flex items-center justify-center bg-[#FEEBC8] rounded-full mb-4">
                            <Image src={option.icon} alt={option.name} width={60} height={60} />
                        </div>
                        <h2
                            className={`text-base font-semibold ${option.name === selectedOption
                                ? "text-[#3D4E6D]"
                                : "text-gray-600"
                                }`}
                        >
                            {option.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectOption;
