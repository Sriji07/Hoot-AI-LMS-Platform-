"use client";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { toast } from "sonner";

function CourseCardItem({ course, onDelete }) {
    const handleDelete = async () => {
        try {
            const confirmDelete = confirm(
                `Are you sure you want to delete "${course?.courseLayout?.courseTitle}"?`
            );
            if (!confirmDelete) return;

            const response = await axios.delete("/api/courses/delete", {
                data: { courseId: course?.courseId },
            });

            toast.success("✅ Course deleted successfully");
            if (onDelete) onDelete(course.courseId);
        } catch (error) {
            console.error("Error deleting course:", error);
            toast.error("❌ Failed to delete course");
        }
    };

    return (
        <div className="border rounded-xl shadow-md p-5 bg-[#FFF8E7] hover:shadow-lg transition duration-300">
            <div>
                <div className="flex justify-between items-center">
                    <Image
                        src={"/knowledge.png"}
                        alt="icon"
                        width={50}
                        height={50}
                        className="rounded-lg"
                    />
                    <h2 className="text-[10px] p-1 px-2 rounded-full bg-[#FFD85E] text-[#3D4E6D] font-semibold">
                        {course?.status}
                    </h2>
                </div>

                <h2 className="mt-3 font-bold text-lg text-[#3D4E6D]">
                    {course?.courseLayout?.courseTitle}
                </h2>
                <p className="text-sm line-clamp-2 text-gray-600 mt-3">
                    {course?.courseLayout?.courseSummary}
                </p>

                <div className="mt-4">
                    <Progress value={0} className="bg-[#FEEBC8]" />
                </div>

                <div className="mt-6 flex justify-between items-center gap-3">
                    {course?.status == "Generating" ? (
                        <Button
                            disabled
                            className="bg-[#FFD85E] text-[#3D4E6D] font-semibold"
                        >
                            Generating...
                        </Button>
                    ) : (
                        <Link href={`/course/${course?.courseId}`}>
                            <Button className="bg-[#FFD85E] hover:bg-[#FFB800] text-[#3D4E6D] font-semibold">
                                View
                            </Button>
                        </Link>
                    )}
                    {/* Delete Button with Owl Palette */}
                    <Button
                        className="bg-[#FF6B6B] hover:bg-[#E63946] text-white font-semibold"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CourseCardItem;
