# Hoot AI – Smart Learning Platform

Hoot AI is an AI-powered learning platform that offers personalized study materials, flashcards, quizzes, and upcoming Q/A sections for enhanced student learning. The platform dynamically generates study resources based on the course content and helps students engage with interactive tools to boost retention.

Direct Link: https://hoot-ai-lms-platform.vercel.app/

---

## 🚀 Features

### **1. Course Dashboard**
- Displays an overview of each course.
- Includes a **Course Intro Card** with title, summary, and chapter count.
- Integrated **progress tracking** using a progress bar.

### **2. Study Material Generation**
- Dynamically generates:
  - **Notes** – Comprehensive summaries of each chapter.
  - **Flashcards** – Interactive front-back cards to test understanding.
  - **Quizzes** – Auto-generated quizzes for self-assessment.
  - **Q/A Section (Coming Soon)** – Premium feature for personalized Q&A sessions.

### **3. Interactive Flashcards**
- Flip animation using **Framer Motion**.
- Carousel integration for smooth navigation.
- Beautifully designed cards with modern UI styling.

### **4. Quizzes with Scoring**
- Multiple-choice questions with instant feedback (Correct/Incorrect).
- Shows correct answers when the user makes a mistake.
- Tracks the **total score** after completing all questions.

### **5. Premium Upgrade Section**
- A dedicated **Upgrade Page** to unlock premium features like advanced Q&A.

### **6. Authentication with Clerk**
- User login and profile management powered by **Clerk**.
- Customizable `UserButton` for profile access.

### **7. Responsive UI**
- Fully responsive layout designed with **Tailwind CSS**.
- Gradient backgrounds and modern component designs.

---

## 🛠 Tech Stack

### **Frontend**
- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) – For modern responsive UI.
- [ShadCN UI](https://ui.shadcn.com/) – For reusable UI components.
- [Framer Motion](https://www.framer.com/motion/) – Smooth animations (flashcards, transitions).
- [Lucide Icons](https://lucide.dev/) – Icon components.
- [React Spinners](https://www.davidhu.io/react-spinners/) – Loading indicators.

### **Backend**
- **API Routes** in Next.js.
- **Axios** for client-server communication.

### **Authentication**
- [Clerk](https://clerk.com/) – For user sign-in, sign-up, and session management.

### **Notifications**
- [Sonner](https://sonner.emilkowal.ski/) – For beautiful toast notifications.

---

## 🌟 Future Roadmap

Q/A Section – AI-based question and answer generation.

Premium Plans – Unlock advanced features like custom flashcards.

Analytics Dashboard – User learning analytics & progress insights.

Mobile App – React Native-based companion app.



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open (https://hoot-ai-lms-platform.vercel.app/) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
