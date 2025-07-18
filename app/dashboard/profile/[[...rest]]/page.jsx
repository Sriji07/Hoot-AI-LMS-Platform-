"use client";

import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#FFF8E7]">
            <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-xl">
                <h1 className="text-3xl font-bold text-center mb-4 text-[#3D4E6D]">
                    Manage Your Profile
                </h1>
                <UserProfile
                    appearance={{
                        elements: {
                            rootBox: "flex justify-center",
                            card: "shadow-xl rounded-xl p-4",
                            formButtonPrimary: "bg-[#FFD85E] text-[#3D4E6D] hover:bg-[#FFB800]",
                        },
                    }}
                />
            </div>
        </div>
    );
}
