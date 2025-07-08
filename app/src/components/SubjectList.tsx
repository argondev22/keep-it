"use client";

import { useState } from "react";

interface Subject {
  id: string;
  name: string;
  color: string;
  icon: string;
}

interface SubjectListProps {
  subjects: Subject[];
  selectedSubject: Subject | null;
  onSelectSubject: (subject: Subject) => void;
  onAddSubject: (subject: Subject) => void;
}

export default function SubjectList({ 
  subjects, 
  selectedSubject, 
  onSelectSubject, 
  onAddSubject 
}: SubjectListProps) {
  const [showSubjectSelection, setShowSubjectSelection] = useState(false);
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
      
      onAddSubject(newSubject);
      setNewSubjectName("");
      setShowSubjectSelection(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-80">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-gray-800">教材一覧</h4>
        <button
          onClick={() => setShowSubjectSelection(!showSubjectSelection)}
          className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm"
        >
          {showSubjectSelection ? "×" : "+"}
        </button>
      </div>
      
      {showSubjectSelection && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <input
            type="text"
            value={newSubjectName}
            onChange={(e) => setNewSubjectName(e.target.value)}
            placeholder="教材名を入力"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm mb-2"
          />
          <button
            onClick={handleAddSubject}
            className="w-full px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
          >
            追加
          </button>
        </div>
      )}
      
      <div className="space-y-2">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => onSelectSubject(subject)}
            className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
              selectedSubject?.id === subject.id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full ${subject.color} flex items-center justify-center text-white text-sm font-bold`}>
                {subject.icon}
              </div>
              <span className="font-medium text-gray-800">{subject.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}