"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus } from "../lib/icons/table-icons";

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
  isLoggedIn?: boolean;
}

export default function SubjectList({
  subjects,
  selectedSubject,
  onSelectSubject,
  isLoggedIn = false
}: SubjectListProps) {
  const router = useRouter();

  return (
    <div className="absolute right-15 bg-white rounded-2xl shadow-xl p-6 w-80 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-gray-800">今日の学習</h4>
        <button
          onClick={isLoggedIn ? () => router.push('/subjects') : undefined}
          className={`px-3 py-1 rounded-lg text-sm transition-colors ${
            isLoggedIn
              ? 'bg-indigo-500 text-white hover:bg-indigo-600 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!isLoggedIn}
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>


      <div className="flex-1 overflow-y-auto">
        {subjects.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-sm">教材が登録されていません。<br />
              教材を登録するには、<Link href="/login" className="text-blue-500 hover:text-blue-700">ログイン</Link>してください。</p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
