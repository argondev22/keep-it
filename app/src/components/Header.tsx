"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Header() {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

          <div className="flex items-center relative">
            <div
              className="relative"
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                setShowTooltip(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setShowTooltip(false);
                }, 2000);
              }}
            >
              <Image
                src="/no-user.webp"
                alt="User avatar"
                className="rounded-full cursor-pointer hover:shadow-lg transition-shadow"
                width={70}
                height={70}
              />

              {showTooltip && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-10">
                  <div className="text-sm text-gray-700 mb-2">
                    現在、アカウントにログインしていません。
                  </div>
                  <Link href="/login" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    ログインしますか？
                  </Link>
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
