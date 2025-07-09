"use client";

import { useRouter } from "next/navigation";

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
}

export default function SubjectList({
  subjects,
  selectedSubject,
  onSelectSubject
}: SubjectListProps) {
  const router = useRouter();

  return (
    <div className="absolute right-15 bg-white rounded-2xl shadow-xl p-6 w-80 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-gray-800">教材一覧</h4>
        <button
          onClick={() => router.push('/subjects')}
          className="px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm"
        >
          +
        </button>
      </div>


      <div className="flex-1 overflow-y-auto">
        <div className="space-y-2 pr-2">
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
    </div>
  );
}
