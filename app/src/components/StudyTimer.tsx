"use client";

import { useState, useEffect } from "react";
import { Settings } from "../lib/icons/table-icons";

interface SettingsModalProps {
  initialStudyTime: number;
  initialBreakTime: number;
  onSubmit: (studyTime: number, breakTime: number) => void;
  onClose: () => void;
}

function SettingsModal({ initialStudyTime, initialBreakTime, onSubmit, onClose }: SettingsModalProps) {
  const [studyTime, setStudyTime] = useState(initialStudyTime);
  const [breakTime, setBreakTime] = useState(initialBreakTime);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(studyTime, breakTime);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        タイマー設定
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            学習時間（分）
          </label>
          <input
            type="number"
            value={studyTime}
            onChange={(e) => setStudyTime(Number(e.target.value))}
            min="1"
            max="120"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            休憩時間（分）
          </label>
          <input
            type="number"
            value={breakTime}
            onChange={(e) => setBreakTime(Number(e.target.value))}
            min="1"
            max="60"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex gap-3 justify-center pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            保存
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
}

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
  const [studyTime, setStudyTime] = useState(25 * 60); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [currentSubject, setCurrentSubject] = useState<Subject | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      if (!isBreakTime) {
        // 学習時間終了、休憩時間開始
        setIsBreakTime(true);
        setTime(breakTime);
      } else {
        // 休憩時間終了、学習時間に戻る
        setIsBreakTime(false);
        setTime(studyTime);
        setCurrentSubject(null);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreakTime, studyTime, breakTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (selectedSubject) {
      setCurrentSubject(selectedSubject);
    }
    setIsActive(true);
  };

  const handlePause = () => setIsActive(false);

  const handleReset = () => {
    setIsActive(false);
    setIsBreakTime(false);
    setTime(studyTime);
    setCurrentSubject(null);
    onResetSelection();
  };

  const handleSettingsSubmit = (newStudyTime: number, newBreakTime: number) => {
    setStudyTime(newStudyTime * 60);
    setBreakTime(newBreakTime * 60);
    if (!isActive) {
      setTime(newStudyTime * 60);
    }
    setShowSettings(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-150 relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-800 flex-1 text-center">
          {isBreakTime ? "休憩タイマー" : "学習タイマー"}
        </h3>
        <button
          onClick={() => setShowSettings(true)}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {showSettings && (
        <div className="absolute inset-0 bg-white rounded-3xl shadow-xl p-8 z-10">
          <SettingsModal
            initialStudyTime={studyTime / 60}
            initialBreakTime={breakTime / 60}
            onSubmit={handleSettingsSubmit}
            onClose={() => setShowSettings(false)}
          />
        </div>
      )}
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
          <div className={`w-48 h-48 rounded-full border-8 flex items-center justify-center mx-auto shadow-inner ${
            isBreakTime
              ? 'border-green-100 bg-gradient-to-br from-green-50 to-green-100'
              : 'border-indigo-100 bg-gradient-to-br from-indigo-50 to-indigo-100'
          }`}>
            <div className={`text-4xl font-mono font-bold ${
              isBreakTime ? 'text-green-600' : 'text-indigo-600'
            }`}>
              {formatTime(time)}
            </div>
          </div>
          {isActive && (
            <div className={`absolute inset-0 rounded-full border-8 animate-pulse ${
              isBreakTime ? 'border-green-500' : 'border-indigo-500'
            }`}></div>
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
            <p className="text-gray-600 text-center">教材を選択するか、そのまま開始してください</p>
          </div>
        )}

        <div className="flex gap-3 justify-center">
          <button
            onClick={handleStart}
            disabled={isActive}
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
