"use client";
import { CourseCountContext } from "../../context/CourseCountContext";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
import { LayoutDashboard, Shield, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

function SideBar() {
    const MenuList = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/dashboard",
        },
        {
            name: "Upgrade",
            icon: Shield,
            path: "/dashboard/upgrade",
        },

        {
            name: "Profile",
            icon: UserCircle,
            path: "/dashboard/profile",
        },
    ];

    const { totalCourse, setTotlaCourse } = useContext(CourseCountContext);
    const path = usePathname();
    return (
        <div
            className="h-screen w-64 mt-10 mb-40px shadow-lg p-6 bg-gradient-to-b 
            from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7] flex flex-col justify-between
            rounded-r-2xl border-r border-[#FFD85E]/40"
        >
            {/* ✅ Create New Button */}
            <div className="mt-6">
                <Link href={"/create"} className="w-full block">
                    <Button
                        className="w-full bg-[#FFD85E] text-[#3D4E6D] font-bold
                        hover:bg-[#FEC84B] hover:scale-105 transition-transform duration-300 shadow-md"
                    >
                        +&nbsp;Create New
                    </Button>
                </Link>

                {/* ✅ Menu Items */}
                <div className="mt-6 space-y-2">
                    {MenuList.map((menu, index) => (
                        <div
                            key={index}
                            className={`flex gap-4 items-center p-3 rounded-lg cursor-pointer transition-all
                            text-[#3D4E6D] font-medium hover:bg-[#FFF1DA] hover:shadow
                            ${path === menu.path ? "bg-[#FFD85E]/30 font-semibold" : ""}`}
                        >
                            <menu.icon className="w-5 h-5 text-[#3D4E6D]" />
                            <Link href={menu.path} className="w-full">{menu.name}</Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* ✅ Bottom Credit Section */}
            <div
                className="border p-4 bg-white rounded-xl shadow-md mt-6
                text-center text-[#3D4E6D] hover:shadow-lg transition-all"
            >
                <h2 className="text-base font-semibold mb-3">
                    Available Credits: <span className="text-[#F97316]">{5 - totalCourse}</span>
                </h2>
                <Progress
                    value={(totalCourse / 5) * 100}
                    className="h-2 bg-gray-200 rounded-full"
                />
                <h2 className="text-xs mt-2 text-gray-500">
                    {totalCourse} out of 5 Credits used
                </h2>
                <Link
                    href="/dashboard/upgrade"
                    className="text-[#F97316] text-sm font-medium mt-2 inline-block hover:underline"
                >
                    Upgrade to create more
                </Link>
            </div>
        </div>
    );
}

export default SideBar;
