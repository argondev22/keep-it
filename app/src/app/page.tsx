"use client";

import { useState } from "react";
import Header from "../components/Header";
import StudyTimer from "../components/StudyTimer";
// import QuickActions from "../components/QuickActions";
// import StatsSection from "../components/StatsSection";
import SubjectList from "../components/SubjectList";
import WelcomeSection from "../components/WelcomeSection";

interface Subject {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export default function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", name: "数学", color: "bg-blue-500", icon: "🧮" },
    { id: "2", name: "英語", color: "bg-green-500", icon: "📚" },
    { id: "3", name: "国語", color: "bg-red-500", icon: "✍️" },
    { id: "4", name: "理科", color: "bg-purple-500", icon: "🔬" },
    { id: "5", name: "社会", color: "bg-yellow-500", icon: "🌍" },
  ]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const handleAddSubject = (newSubject: Subject) => {
    setSubjects([...subjects, newSubject]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      <main className="mx-auto py-8">
        <WelcomeSection />

        <section className="relative flex justify-center mb-12">
          <StudyTimer
            selectedSubject={selectedSubject}
            onResetSelection={() => setSelectedSubject(null)}
          />
          <SubjectList
            subjects={subjects}
            selectedSubject={selectedSubject}
            onSelectSubject={handleSelectSubject}
            onAddSubject={handleAddSubject}
          />
        </section>

      </main>
    </div>
  );
}
