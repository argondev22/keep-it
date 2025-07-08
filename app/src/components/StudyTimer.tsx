"use client";

import { useState, useEffect } from "react";

interface Subject {
  id: string;
  name: string;
  color: string;
  icon: string;
}

interface StudyTimerProps {
  selectedSubject: Subject | null;
  onResetSelection: () => void;
}

export default function StudyTimer({ selectedSubject, onResetSelection }: StudyTimerProps) {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [currentSubject, setCurrentSubject] = useState<Subject | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (selectedSubject) {
      setCurrentSubject(selectedSubject);
      setIsActive(true);
    }
  };

  const handlePause = () => setIsActive(false);

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
    setCurrentSubject(null);
    onResetSelection();
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-150">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        学習タイマー
      </h3>
      <div className="text-center">
        {currentSubject && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">学習中の科目</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-2xl">{currentSubject.icon}</span>
              <p className="font-semibold text-gray-800">{currentSubject.name}</p>
            </div>
          </div>
        )}

        <div className="relative mx-auto mb-6">
          <div className="w-48 h-48 rounded-full border-8 border-indigo-100 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center mx-auto shadow-inner">
            <div className="text-4xl font-mono text-indigo-600 font-bold">
              {formatTime(time)}
            </div>
          </div>
          {isActive && (
            <div className="absolute inset-0 rounded-full border-8 border-indigo-500 animate-pulse"></div>
          )}
        </div>

        {!isActive && !currentSubject && selectedSubject && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">選択中の教材</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-2xl">{selectedSubject.icon}</span>
              <p className="font-semibold text-gray-800">{selectedSubject.name}</p>
            </div>
          </div>
        )}

        {!isActive && !currentSubject && !selectedSubject && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-gray-600 text-center">教材を選択してください</p>
          </div>
        )}

        <div className="flex gap-3 justify-center">
          <button
            onClick={handleStart}
            disabled={isActive || (!selectedSubject && !currentSubject)}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {currentSubject ? "再開" : "開始"}
          </button>
          <button
            onClick={handlePause}
            disabled={!isActive}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            一時停止
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}
