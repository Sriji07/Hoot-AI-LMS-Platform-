"use client";

import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DashboardHeader from "./dashboard/_components/DashboardHeader";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7] flex flex-col">


      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-[#3D4E6D] leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Learn Smarter with <span className="text-[#FFB800]">Hoot AI</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Generate personalized notes, flashcards, and quizzes instantly.
          Start your AI-powered learning journey today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link href="/create">
            <Button
              size="lg"
              className="bg-[#FFD85E] text-[#3D4E6D] font-semibold hover:bg-[#FFC947] shadow-lg hover:scale-105 transition"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#FFD85E] text-[#3D4E6D] hover:bg-[#FFF3D6]"
            >
              Go to Dashboard
            </Button>
          </Link>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Image
            src="/laptop.png"
            alt="Learning Illustration"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 mt-10 bg-gradient-to-r from-[#FFF8E7] via-[#FEEBC8] to-[#FFF8E7] text-gray-700 text-sm font-medium border-t border-[#FFD85E]">
        © {new Date().getFullYear()} <span className="font-semibold text-[#3D4E6D]">Hoot AI</span>.
        Made by <span className="text-[#FFB800] font-bold">Sri</span>. All rights reserved.
      </footer>

    </div>
  );
}
