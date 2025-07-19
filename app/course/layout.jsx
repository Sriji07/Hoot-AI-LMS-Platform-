import React from "react";
import DashboardHeader from "../dashboard/_components/DashboardHeader";

const CourseViewLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7]">
            {/* Header */}

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
                <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-6 md:p-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CourseViewLayout;
