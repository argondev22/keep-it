"use client";

import { useState } from "react";
import Header from "../components/Header";
import StudyTimer from "../components/StudyTimer";
import QuickActions from "../components/QuickActions";
import StatsSection from "../components/StatsSection";
import SubjectList from "../components/SubjectList";

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

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            今日も学習を頑張りましょう！
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            集中して勉強するための学習タイマーです。効率的な学習習慣を身につけましょう。
          </p>
        </section>

        <section className="flex justify-center items-start gap-8 mb-12">
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

        <QuickActions />
        <StatsSection />
      </main>
    </div>
  );
}
