"use client";
import { Button } from "../../../../components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ViewNotes = () => {
    const { courseId } = useParams();
    const [notes, setNotes] = useState([]);
    const [stepCount, setStepCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        GetNotes();
    }, []);

    const GetNotes = async () => {
        const result = await axios.post("/api/study-type", {
            courseId: courseId,
            studyType: "notes",
        });

        console.log(result?.data);
        setNotes(result?.data);
    }
    return (
        <div>
            {/* <div className="flex gap-5 items-center">

                {notes?.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full h-2 rounded-full ${index < stepCount ? "bg-primary" : "bg-gray-200"
                            }`}
                    ></div>
                ))}

            </div> */}
            {notes?.length === 0 && (
                <p className="text-sm text-gray-500 mt-2">No notes found.</p>
            )}
        </div>
    )
}

export default ViewNotes