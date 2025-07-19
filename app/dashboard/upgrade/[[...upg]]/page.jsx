"use client";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

export default function UpgradeComingSoon() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7] text-center px-4">
            <motion.h1
                className="text-4xl md:text-6xl font-extrabold text-[#3D4E6D] mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                🚀 Coming Soon!
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                We're working hard to bring you exciting premium features. Stay tuned!
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                <Link href="/dashboard">
                    <Button className="bg-[#FFD85E] text-[#3D4E6D] font-semibold px-6 py-3 rounded-full hover:bg-[#FFB800] transition">
                        Back to Dashboard
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}
