"use client";
import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#090909] flex items-center justify-center p-4 mt-44">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Section - Why Join Early */}
        <div className="space-y-8">
          <div>
            <h1 className="text-white font-helvetica text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Welcome Back
            </h1>
            <p className="text-white/80 font-helvetica text-lg leading-relaxed">
              Continue your journey with Law Yeti and access your personalized legal assistance dashboard. Stay connected with your legal team and track your case progress.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="/assets/images/attorny-left-img.png"
              alt="Legal professionals"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 lg:p-12">
          <div className="mb-8">
            <h2 className="text-gold font-helvetica text-3xl lg:text-4xl font-bold mb-4">
              Sign In
            </h2>
            <p className="text-white/80 font-helvetica text-base leading-relaxed">
              Access your Law Yeti account and continue where you left off. Your legal assistance is just a click away.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-[#1A1A1A] border border-[#484848] h-[70px] rounded-[42px] placeholder:text-[14px] px-10 focus-visible:border-white/60 text-white placeholder:text-white/60 focus:outline-none transition-colors"
              />
            </div>
            
            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full bg-[#1A1A1A] border border-[#484848] h-[70px] rounded-[42px] placeholder:text-[14px] px-10 focus-visible:border-white/60 text-white placeholder:text-white/60 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-gold bg-[#1A1A1A] border-white/60 rounded focus:ring-gold focus:ring-2"
                />
                <span className="ml-2 text-white/80 font-helvetica text-sm">Remember me</span>
              </label>
              <a href="#" className="text-gold font-helvetica text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gold text-black font-helvetica text-lg font-semibold py-4 px-8 rounded-2xl hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight size={20} />
            </button>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-white/60 font-helvetica text-sm">
                Don't have an account?{" "}
              </span>
              <a href="/auth/signup" className="text-gold font-helvetica text-sm hover:underline">
                Sign Up
              </a>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#1A1A1A] text-white/60 font-helvetica">Or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
              
              <button
                type="button"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M1 1h9v9H1z"/>
                  <path fill="#7FBA00" d="M14 1h9v9h-9z"/>
                  <path fill="#00A4EF" d="M1 14h9v9H1z"/>
                  <path fill="#FFB900" d="M14 14h9v9h-9z"/>
                </svg>
              </button>
              
              <button
                type="button"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
