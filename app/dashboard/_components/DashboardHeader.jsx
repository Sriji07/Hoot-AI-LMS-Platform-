"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashboardHeader() {
    return (
        <header
            className="w-full p-4 flex items-center justify-between 
            bg-gradient-to-r from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7] 
            shadow-md rounded-b-xl"
        >
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <div
                        className="bg-[#FFD85E] p-2 rounded-full shadow-md 
                        hover:scale-105 transition-transform duration-300"
                    >
                        <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    </div>
                    <h2 className="text-2xl font-extrabold hidden md:block 
                        text-[#3D4E6D]">
                        Hoot AI
                    </h2>
                </Link>
            </div>

            {/* User Profile */}
            <div
                className="flex items-center gap-3 
                bg-white px-3 py-1 rounded-full shadow-md 
                hover:bg-[#FFF1DA] transition duration-200"
            >
                <UserButton
                    appearance={{
                        elements: {
                            userButtonAvatarBox: "w-10 h-10 border-2 border-[#FFD85E] rounded-full",
                        },
                    }}
                />
            </div>
        </header>
    );
}

export default DashboardHeader;
