"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "../../lib/axios/api.lib";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(email+"   "+ password)
      const response = await loginUser(email, password);
      const {
        status,
        message,
        token,
        refreshToken,
        data: userData,
      } = response.data;
      if (status === 200) {
        localStorage.setItem("access_token", token);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("user", JSON.stringify(userData));
        alert(message || "Đăng nhập thành công!");

      } else {
        alert(message || "Đăng nhập thất bại!");
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Lỗi hệ thống!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleLogin}>
      <input
        className="w-full px-4 py-2 border rounded-lg placeholder:font-bold placeholder-gray-400 bg-black text-white border border-black placeholder-gray-400 px-4 py-2 rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        className="w-full px-4 py-2 border rounded-lg placeholder:font-bold placeholder-gray-400 bg-black text-white border border-black placeholder-gray-400 px-4 py-2 rounded"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
        required
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" type="submit">
        Đăng nhập
      </button>
    </form>
  );
}
