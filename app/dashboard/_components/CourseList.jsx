"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import CourseCardItem from "./CourseCardItem";
import { Button } from "../../../components/ui/button";
import { RefreshCw } from "lucide-react";
//import { CourseCountContext } from "@/app/_context/CourseCountContext";

function CourseList() {
    const { user } = useUser();
    const [courseList, setCourseList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        user && GetCourseList();

    }, [user]);

    const GetCourseList = async () => {
        setLoading(true);
        const result = await axios.post("/api/courses", {
            createdBy: user.primaryEmailAddress.emailAddress,
        });
        console.log(result);
        setCourseList(result.data.result);
        setLoading(false);
    }
    return (
        <div>
            <h2 className="font-bold text-2xl flex justify-between items-center mt-6">
                Your Study Material
                <Button
                    variant="outline"
                    onClick={GetCourseList}
                    className="border-primary text-primary"
                    disabled={loading}
                >
                    <RefreshCw className={loading ? "animate-spin" : ""} />
                    {loading ? "Loading..." : "Refresh"}
                </Button>
            </h2>

            <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {!loading
                    ? courseList?.map((course, index) => (
                        <CourseCardItem course={course} key={course.id || index} />
                    ))
                    : [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div
                            key={index}
                            className="h-56 w-full bg-slate-200 rounded-lg animate-pulse"
                        />
                    ))}
            </div>
        </div>

    )
}

export default CourseList
