"use client";
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashboardHeader() {
    return (
        <header
            className="w-full px-3 py-2 flex items-center justify-between 
        bg-orange-500/30 backdrop-blur-md shadow-sm sticky top-0 z-50"
        >
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-2">
                    <div
                        className="shadow-md 
                        hover:scale-105 transition-transform duration-300"
                    >
                        <Image src="/logo.svg" alt="logo" width={45} height={45} />
                    </div>
                    <h2
                        className="text-2xl font-extrabold hidden md:block 
                        text-[#3D4E6D]"
                    >
                        Hoot AI
                    </h2>
                </Link>
            </div>

            {/* Auth Section */}
            <div className="flex items-center gap-4">
                {/* When user is signed in */}
                <SignedIn>
                    <Link
                        href="/dashboard"
                        className="px-4 py-2 bg-[#FFD85E] hover:bg-[#FFB800] rounded-lg text-[#3D4E6D] font-semibold transition"
                    >
                        Dashboard
                    </Link>
                    <div className="hover:bg-[#FFF1DA] px-3 py-1 rounded-full transition duration-200">
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "rounded-full custom-avatar-size",
                                },
                            }}
                        />
                    </div>
                </SignedIn>

                {/* When user is signed out */}
                <SignedOut>
                    <div className="flex gap-3">
                        <SignInButton mode="modal">
                            <button className="px-4 py-2 bg-[#FFD85E] hover:bg-[#FFB800] rounded-lg text-[#3D4E6D] font-semibold transition">
                                Sign In
                            </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <button className="px-4 py-2 bg-gradient-to-r from-[#FFB800] to-[#FFD85E] hover:opacity-90 rounded-lg text-[#3D4E6D] font-semibold transition">
                                Sign Up
                            </button>
                        </SignUpButton>
                    </div>
                </SignedOut>
            </div>
        </header>
    );
}

export default DashboardHeader;
