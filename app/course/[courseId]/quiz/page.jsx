"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StepProgress from "../_components/StepProgress";
import QuizCardItem from "./components/QuizCardItem";
import { toast } from "sonner";

function Quiz() {
    const { courseId } = useParams();
    const router = useRouter();
    const [quiz, setQuiz] = useState([]);
    const [stepCount, setStepCount] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState();
    const [score, setScore] = useState(0);

    useEffect(() => {
        GetQuiz();
    }, []);

    const GetQuiz = async () => {
        try {
            const result = await axios.post("/api/study-type", {
                courseId: courseId,
                studyType: "Quiz",
            });
            const questions = result?.data?.content?.questions || [];
            setQuiz(questions);
            if (questions.length > 0) {
                setCorrectAnswer(questions[0]?.answer);
            }
        } catch (error) {
            toast.error("Failed to fetch quiz");
        }
    };

    const checkAnswer = (userAnswer, currentQuestion) => {
        const isCorrect = userAnswer === currentQuestion.answer;
        setIsCorrectAnswer(isCorrect);
        setCorrectAnswer(currentQuestion.answer);
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }
    };

    useEffect(() => {
        if (quiz.length > 0) {
            setCorrectAnswer(quiz[stepCount]?.answer);
            setIsCorrectAnswer(null);
        }
    }, [stepCount, quiz]);

    const goToCoursePage = () => router.push(`/course/${courseId}`);

    const isLastQuestion = stepCount === quiz.length;

    return (
        <div className="min-h-screen flex justify-center items-start bg-[#FFF9E8] py-6 px-3">
            <div className="w-full max-w-lg">
                <h2 className="text-center text-4xl font-bold text-[#3D4E6D] mb-4">Quiz</h2>
                <p className="text-center text-gray-500 text-sm mb-6">
                    Answer and move to the next!
                </p>

                {quiz.length > 0 ? (
                    <>
                        {/* Step Progress */}
                        {!isLastQuestion && (
                            <StepProgress
                                data={quiz}
                                stepCount={stepCount}
                                setStepCount={setStepCount}
                            />
                        )}

                        {/* Quiz or Score Summary */}
                        {!isLastQuestion ? (
                            <div className="bg-[#FFF6E5] rounded-lg shadow-sm p-4 mt-4">
                                <QuizCardItem
                                    quiz={quiz[stepCount]}
                                    userSelectedOption={(v) =>
                                        checkAnswer(v, quiz[stepCount])
                                    }
                                />
                            </div>
                        ) : (
                            <div className="bg-white rounded-lg shadow-md p-6 mt-6 text-center">
                                <h2 className="text-2xl font-bold text-[#3D4E6D] mb-4">
                                    🎉 Quiz Completed!
                                </h2>
                                <p className="text-gray-700 text-lg">
                                    Your Score: <span className="font-bold">{score}</span> /{" "}
                                    {quiz.length}
                                </p>
                                <p className="text-[#FFD85E] font-semibold text-xl mt-2">
                                    {((score / quiz.length) * 100).toFixed(1)}% Correct
                                </p>
                                <button
                                    onClick={goToCoursePage}
                                    className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm"
                                >
                                    Go to Course Page
                                </button>
                            </div>
                        )}

                        {/* Feedback */}
                        {isCorrectAnswer !== null && !isLastQuestion && (
                            <div
                                className={`p-2 mt-3 text-center rounded-md text-sm font-medium transition-colors ${isCorrectAnswer
                                    ? "bg-green-50 border border-green-400 text-green-700"
                                    : "bg-red-50 border border-red-400 text-red-700"
                                    }`}
                            >
                                {isCorrectAnswer
                                    ? "✅ Correct!"
                                    : `❌ Correct Answer: ${correctAnswer}`}
                            </div>
                        )}

                        {/* Buttons */}
                        {!isLastQuestion && (
                            <div className="flex justify-between items-center mt-6">
                                {stepCount > 0 && (
                                    <button
                                        onClick={() => setStepCount((prev) => prev - 1)}
                                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm"
                                    >
                                        ← Previous
                                    </button>
                                )}
                                <button
                                    onClick={() => setStepCount((prev) => prev + 1)}
                                    className="ml-auto px-4 py-2 bg-[#FFD85E] hover:bg-[#FFB800] text-[#3D4E6D] rounded-md text-sm"
                                >
                                    {stepCount === quiz.length - 1 ? "Finish" : "Next →"}
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-center text-gray-400 mt-6">Loading quiz...</p>
                )}
            </div>
        </div>
    );
}

export default Quiz;
