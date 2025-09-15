"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";

interface Subject {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export default function SubjectsPage() {
  const router = useRouter();
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", name: "数学", color: "bg-blue-500", icon: "🧮" },
    { id: "2", name: "英語", color: "bg-green-500", icon: "📚" },
    { id: "3", name: "国語", color: "bg-red-500", icon: "✍️" },
    { id: "4", name: "理科", color: "bg-purple-500", icon: "🔬" },
    { id: "5", name: "社会", color: "bg-yellow-500", icon: "🌍" },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSubjectName, setNewSubjectName] = useState("");

  const handleAddSubject = () => {
    if (newSubjectName.trim()) {
      const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-purple-500", "bg-yellow-500", "bg-indigo-500", "bg-pink-500"];
      const icons = ["📖", "✏️", "🎯", "💡", "🔍", "📊", "🎨"];

      const newSubject: Subject = {
        id: Date.now().toString(),
        name: newSubjectName.trim(),
        color: colors[Math.floor(Math.random() * colors.length)],
        icon: icons[Math.floor(Math.random() * icons.length)],
      };

      setSubjects([...subjects, newSubject]);
      setNewSubjectName("");
      setShowAddForm(false);
    }
  };

  const handleDeleteSubject = (id: string) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← ホームに戻る
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">教材管理</h1>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              {showAddForm ? "キャンセル" : "新しい教材を追加"}
            </button>
          </div>

          {showAddForm && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <input
                type="text"
                value={newSubjectName}
                onChange={(e) => setNewSubjectName(e.target.value)}
                placeholder="教材名を入力"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 mb-3"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleAddSubject}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  追加
                </button>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setNewSubjectName("");
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  キャンセル
                </button>
              </div>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${subject.color} flex items-center justify-center text-white text-lg font-bold`}>
                      {subject.icon}
                    </div>
                    <span className="font-medium text-gray-800">{subject.name}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteSubject(subject.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}