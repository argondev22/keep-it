export default function StatsSection() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">今日の統計</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">0時間</div>
          <div className="text-gray-600 text-sm">学習時間</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">0回</div>
          <div className="text-gray-600 text-sm">セッション数</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">0%</div>
          <div className="text-gray-600 text-sm">目標達成率</div>
        </div>
      </div>
    </section>
  );
}