import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";

export default function DashboardPage() {
    return (
        <div>
            <WelcomeBanner />
            <CourseList />
        </div>
    );
}
