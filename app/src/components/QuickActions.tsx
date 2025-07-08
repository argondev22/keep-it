export default function QuickActions() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="text-3xl mb-4">📚</div>
        <h3 className="font-semibold text-gray-800 mb-2">学習記録</h3>
        <p className="text-gray-600 text-sm">今日の学習時間を記録しましょう</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="text-3xl mb-4">📊</div>
        <h3 className="font-semibold text-gray-800 mb-2">進捗管理</h3>
        <p className="text-gray-600 text-sm">学習の進捗を確認できます</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="text-3xl mb-4">🎯</div>
        <h3 className="font-semibold text-gray-800 mb-2">目標設定</h3>
        <p className="text-gray-600 text-sm">学習目標を設定して達成しましょう</p>
      </div>
    </section>
  );
}