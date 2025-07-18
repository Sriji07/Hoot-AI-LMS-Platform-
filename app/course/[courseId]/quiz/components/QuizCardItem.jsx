import React, { useState } from "react";

function QuizCardItem({ quiz, userSelectedOption }) {
    const [selectedOption, setSelectedOption] = useState();

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        userSelectedOption(option);
    };

    return (
        <div className="mt-10 p-5">
            <h2 className="font-bold text-3xl text-center mb-5">{quiz?.question}</h2>

            <div className="grid grid-cols-2 gap-5 mt-8">
                {quiz?.options?.map((option, index) => {
                    const isSelected = selectedOption === option;
                    const isCorrect = option === quiz.answer;

                    return (
                        <h2
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className={`border rounded-full p-3 px-3 text-center text-lg cursor-pointer transition-all duration-300
                                ${isSelected
                                    ? isCorrect
                                        ? "bg-green-500 text-white border-green-600"
                                        : "bg-red-500 text-white border-red-600"
                                    : "hover:bg-gray-200"
                                }`}
                        >
                            {option}
                        </h2>
                    );
                })}
            </div>
        </div>
    );
}

export default QuizCardItem;
