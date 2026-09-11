"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  RefreshCw,
  Sparkles,
  User,
} from "lucide-react";
import Header from "@/components/layout/Header";
import { useAuth } from "@/lib/authContext";

export default function AuthPage() {
  const router = useRouter();
  const { signIn, signUp, isAuthenticated, user } = useAuth();

  const [mode, setMode] = React.useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [successMsg, setSuccessMsg] = React.useState<string | null>(null);

  // Sign In State
  const [signInIdent, setSignInIdent] = React.useState("");
  const [signInPassword, setSignInPassword] = React.useState("");
  const [signInRemember, setSignInRemember] = React.useState(false);

  // Sign Up State
  const [signUpFullName, setSignUpFullName] = React.useState("");
  const [signUpUsername, setSignUpUsername] = React.useState("");
  const [signUpEmail, setSignUpEmail] = React.useState("");
  const [signUpPhone, setSignUpPhone] = React.useState("");
  const [signUpPassword, setSignUpPassword] = React.useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = React.useState("");
  const [signUpConsent, setSignUpConsent] = React.useState(true);

  // If already logged in, show status or redirect
  React.useEffect(() => {
    if (isAuthenticated && !isLoading && !successMsg) {
      // User is already logged in
    }
  }, [isAuthenticated, isLoading, successMsg]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signInIdent.trim() || !signInPassword) {
      setError("Please enter your email/phone and password.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const loggedUser = await signIn({
        email_or_phone: signInIdent.trim(),
        password: signInPassword,
        remember_me: signInRemember,
      });

      setSuccessMsg(`Welcome back, ${loggedUser.full_name || loggedUser.username}!`);
      setTimeout(() => {
        router.push(loggedUser.role === "admin" ? "/dashboard" : "/");
      }, 800);
    } catch (err: any) {
      const msg = err instanceof Error ? err.message : "Sign in failed.";
      if (msg.includes("401") || msg.includes("Invalid credentials")) {
        setError("Invalid email/phone or password. Please verify your details.");
      } else {
        setError(msg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!signUpFullName.trim() || !signUpUsername.trim() || !signUpEmail.trim() || !signUpPhone.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (signUpPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (signUpPassword !== signUpConfirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!signUpConsent) {
      setError("Please agree to the civic planning data usage policy.");
      return;
    }

    setIsLoading(true);

    try {
      const newUser = await signUp({
        full_name: signUpFullName.trim(),
        username: signUpUsername.trim().toLowerCase(),
        email: signUpEmail.trim().toLowerCase(),
        phone: signUpPhone.trim(),
        password: signUpPassword,
        confirm_password: signUpConfirmPassword,
        consent: signUpConsent,
      });

      setSuccessMsg(`Account created successfully as ${newUser.role}! Redirecting...`);
      setTimeout(() => {
        router.push(newUser.role === "admin" ? "/dashboard" : "/");
      }, 800);
    } catch (err: any) {
      const msg = err instanceof Error ? err.message : "Sign up failed.";
      if (msg.includes("409") || msg.includes("already")) {
        setError("An account with this email, username, or phone number already exists.");
      } else {
        setError(msg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#eeede9] text-[#171817] flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12">
        <div className="w-full max-w-lg">
          {/* Card Container */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            {/* Header / Brand */}
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#171817] text-white text-xl font-bold">
                C
              </div>
              <h1 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {mode === "signin" ? "Sign in to CIVICO" : "Create Citizen Account"}
              </h1>
              <p className="mt-1.5 text-xs text-slate-500">
                {mode === "signin"
                  ? "Access your reporting workspace and constituency signals."
                  : "Join your community to report issues and track public investments."}
              </p>
            </div>

            {/* Mode Toggle (Sign In | Sign Up) */}
            <div className="mt-6 grid grid-cols-2 rounded-2xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setMode("signin");
                  setError(null);
                }}
                className={`rounded-xl py-2.5 text-xs font-bold transition ${
                  mode === "signin"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("signup");
                  setError(null);
                }}
                className={`rounded-xl py-2.5 text-xs font-bold transition ${
                  mode === "signup"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-900">
                <AlertTriangle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Success Banner */}
            {successMsg && (
              <div className="mt-5 flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-900 font-bold">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Sign In Form */}
            {mode === "signin" && (
              <form onSubmit={handleSignIn} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Email or Phone
                  </label>
                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={signInIdent}
                      onChange={(e) => setSignInIdent(e.target.value)}
                      placeholder="citizen@example.com or +91..."
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Password
                  </label>
                  <div className="relative mt-1.5">
                    <Lock className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={signInPassword}
                      onChange={(e) => setSignInPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={signInRemember}
                      onChange={(e) => setSignInRemember(e.target.checked)}
                      className="rounded border-slate-300 accent-emerald-700"
                    />
                    <span>Remember me on this device</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#171817] py-3 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:opacity-50"
                >
                  {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                  Sign In
                </button>
              </form>
            )}

            {/* Sign Up Form */}
            {mode === "signup" && (
              <form onSubmit={handleSignUp} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Full Name *
                  </label>
                  <div className="relative mt-1.5">
                    <User className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={signUpFullName}
                      onChange={(e) => setSignUpFullName(e.target.value)}
                      placeholder="e.g. Rijul Sekhar Barik"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Username *
                    </label>
                    <input
                      type="text"
                      value={signUpUsername}
                      onChange={(e) => setSignUpUsername(e.target.value)}
                      placeholder="rijulbarik"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Phone Number *
                    </label>
                    <div className="relative mt-1.5">
                      <Phone className="pointer-events-none absolute left-3 top-3 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="tel"
                        value={signUpPhone}
                        onChange={(e) => setSignUpPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-8 pr-3 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                    Email Address *
                  </label>
                  <div className="relative mt-1.5">
                    <Mail className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      value={signUpEmail}
                      onChange={(e) => setSignUpEmail(e.target.value)}
                      placeholder="citizen@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Password *
                    </label>
                    <input
                      type="password"
                      value={signUpPassword}
                      onChange={(e) => setSignUpPassword(e.target.value)}
                      placeholder="Min 8 chars"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      value={signUpConfirmPassword}
                      onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                      placeholder="Repeat password"
                      required
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium outline-none transition focus:border-slate-900 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-2.5 pt-1 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={signUpConsent}
                    onChange={(e) => setSignUpConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 accent-emerald-700"
                  />
                  <span>
                    I agree to CIVICO storing and processing my civic submissions for transparent constituency planning.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:opacity-50"
                >
                  {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                  Create Account
                </button>
              </form>
            )}

            {/* Footer switch */}
            <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
              {mode === "signin" ? (
                <p>
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setMode("signup");
                      setError(null);
                    }}
                    className="font-bold text-emerald-800 hover:underline"
                  >
                    Sign up as a citizen
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setMode("signin");
                      setError(null);
                    }}
                    className="font-bold text-emerald-800 hover:underline"
                  >
                    Sign in here
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
