"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CourseCountContext } from "./context/CourseCountContext";

function Provider({ children }) {
    const { user, isLoaded } = useUser();
    const [isChecking, setIsChecking] = useState(false);
    const [totalCourse, setTotalCourse] = useState(0);

    useEffect(() => {
        if (isLoaded && user) {
            CheckIsNewUser();
            fetchCourseCount();
        }
    }, [isLoaded, user]);

    const CheckIsNewUser = async () => {
        if (!user?.primaryEmailAddress?.emailAddress || !user?.fullName) return;

        try {
            setIsChecking(true);
            await axios.post("/api/createUser", {
                user: {
                    userName: user.fullName,
                    email: user.primaryEmailAddress.emailAddress,
                },
            });
        } catch (error) {
            console.error("Error checking/creating user:", error);
        } finally {
            setIsChecking(false);
        }
    };

    // ✅ Fetch total courses from DB
    const fetchCourseCount = async () => {
        try {
            const response = await axios.get("/api/getCoursesCount"); // Create this API route
            setTotalCourse(response.data.count || 0);
        } catch (error) {
            console.error("Error fetching course count:", error);
        }
    };

    return (
        <CourseCountContext.Provider value={{ totalCourse, setTotalCourse }}>
            <div className="min-h-screen">{children}</div>
        </CourseCountContext.Provider>
    );
}

export default Provider;
