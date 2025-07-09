'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm.screen';
import RegisterForm from './RegisterForm.screen';

export default function AuthFormTabs() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab('login')}
          className={`flex-1 py-2 font-semibold rounded-t-lg transition-colors duration-300 ${
            activeTab === 'login'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => setActiveTab('register')}
          className={`flex-1 py-2 font-semibold rounded-t-lg transition-colors duration-300 ${
            activeTab === 'register'
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Đăng ký
        </button>
      </div>

      {/* Hiệu ứng chuyển cảnh */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
