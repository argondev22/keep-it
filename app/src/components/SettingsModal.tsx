import { useState } from "react";

interface SettingsModalProps {
  initialStudyTime: number;
  initialBreakTime: number;
  onSubmit: (studyTime: number, breakTime: number) => void;
  onClose: () => void;
}

export default function SettingsModal({ initialStudyTime, initialBreakTime, onSubmit, onClose }: SettingsModalProps) {
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
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
