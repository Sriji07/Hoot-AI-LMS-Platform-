"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function WelcomeBanner() {
    const { user } = useUser();
    if (!user) return null;

    return (
        <div
            className="relative w-full p-6 md:p-8 
            rounded-xl shadow-lg flex items-center gap-6
            bg-gradient-to-r from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7]
            border border-[#FFD85E]/40"
        >
            {/* Decorative Glow Behind Image */}
            <div className="absolute top-6 left-6 w-28 h-28 bg-[#FFD85E]/40 rounded-full blur-3xl -z-10"></div>

            {/* Owl / Laptop Image */}
            <Image
                src="/laptop.png"
                alt="Laptop"
                width={120}
                height={120}
                className="drop-shadow-[0_10px_25px_rgba(255,216,94,0.5)] 
                transform hover:scale-105 transition-all duration-300 rotate-[-2deg]"
            />

            {/* Welcome Text */}
            <div className="flex flex-col">
                <h2 className="font-extrabold text-3xl text-[#3D4E6D]">
                    Hello, {user?.fullName} 👋
                </h2>
                <p className="mt-1 text-lg text-[#2b2a3d]">
                    Ready to dive back in? Let’s continue learning and exploring new courses!
                </p>


            </div>
        </div>
    );
}

export default WelcomeBanner;
