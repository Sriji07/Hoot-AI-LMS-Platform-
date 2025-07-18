import { Textarea } from "../../../components/ui/textarea";
import React from "react";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select";

function TopicInput({ setTopic, setDifficultyLevel }) {
    return (
        <div className="w-full relative bg-gradient-to-r from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7] px-6 py-15 md:px-16 lg:px-24  ">

            {/* Owl Hero Icon */}
            <div className="absolute top-0 right-10 ">
                <Image
                    src="/laptop.png"
                    alt="Owl Icon"
                    width={100}
                    height={100}
                    className="drop-shadow-xl"
                />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3D4E6D] mb-4 text-center">
                Enter Your Topic
            </h2>
            <p className="text-gray-700 text-center mb-10 text-lg">
                Paste your topic or content and select difficulty to create your custom study material.
            </p>

            {/* Textarea */}
            <Textarea
                placeholder="Type your topic or paste text..."
                className="w-full h-20 rounded-xl bg-white/70 backdrop-blur-lg border border-gray-300 focus:border-[#FFD85E] focus:ring-2 focus:ring-[#FFD85E] transition-all duration-300 mb-8 p-4 text-gray-800"
                onChange={(event) => setTopic(event.target.value)}
            />

            {/* Difficulty Dropdown */}
            <div className="w-full md:w-1/3 mx-auto">
                <Select onValueChange={(value) => setDifficultyLevel(value)}>
                    <SelectTrigger className="w-full h-12 rounded-xl bg-white/70 backdrop-blur-lg border border-gray-300 px-4 focus:ring-2 focus:ring-[#FFD85E]">
                        <SelectValue placeholder="Choose Difficulty Level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-xl border border-gray-200 shadow-md">
                        <SelectItem value="Easy" className="hover:bg-[#FFF8E7]">Easy</SelectItem>
                        <SelectItem value="Moderate" className="hover:bg-[#FFF8E7]">Moderate</SelectItem>
                        <SelectItem value="Hard" className="hover:bg-[#FFF8E7]">Hard</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}

export default TopicInput;
