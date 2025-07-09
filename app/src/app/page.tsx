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
  const [subjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
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
          />
        </section>

      </main>
    </div>
  );
}
