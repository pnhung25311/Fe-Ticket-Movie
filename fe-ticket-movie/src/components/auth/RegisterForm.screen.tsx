'use client';
import { useState } from 'react';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return (
    <form className="space-y-4">
      <input
        className="w-full px-4 py-2 border rounded-lg placeholder:font-bold placeholder-gray-400"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        className="w-full px-4 py-2 border rounded-lg placeholder:font-bold placeholder-gray-400"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
        required
      />
      <input
        className="w-full px-4 py-2 border rounded-lg placeholder:font-bold placeholder-gray-400"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        placeholder="Nhập lại mật khẩu"
        required
      />
      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Đăng ký
      </button>
    </form>
  );
}
