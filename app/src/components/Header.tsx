export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-blue-900">keep</span>
              <span className="text-yellow-500">IT</span>
            </h1>
            <p className="text-gray-600 text-sm">学習管理アプリケーション</p>
          </div>

          <div className="flex items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold cursor-pointer hover:shadow-lg transition-shadow text-lg">
              U
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
