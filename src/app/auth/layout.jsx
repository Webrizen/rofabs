import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="container relative md:min-h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:p-10 bg-gradient-to-bl from-rose-100 to-teal-100 bg-center bg-cover">
        <div className="relative hidden h-full flex-col bg-muted p-10 rounded-[30px] overflow-hidden bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-slate-950 text-white lg:flex dark:border-r dark:border-slate-700">
          <div className="absolute inset-0 bg-[url('/bg-login.svg')] bg-center bg-cover rounded-br-full" />
          <Link
            href="/"
            className="relative z-20 flex items-center text-lg font-medium w-min whitespace-nowrap"
          >
            Rofabs LLP.
          </Link>
          <div className="border rounded-full border-slate-600 bg-[rgba(225,225,225,0.2)] backdrop-blur-3xl p-2 grid grid-cols-2 gap-1 items-center absolute top-3 right-3 text-sm">
            <Link
              href="/auth/sign-in"
              className="flex items-center justify-center py-2 px-4 rounded-full text-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white border border-slate-50/50"
            >
              Login
            </Link>
            <Link
              href="/auth/sign-up"
              className="flex items-center py-2 px-4 rounded-full text-center text-blue-50"
            >
              New User
            </Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                “ At any rate, humans change over time based on their actions.
                Truth be told, at the end of the day, equality is just a
                fantasy. And most of us go through life denying the fact that we
                live in a meritocracy. ”
              </p>
              <footer className="text-sm mt-2">一一 Arshahdul Ahmed</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-full">
            {children}
            <p className="px-8 text-center text-sm text-muted-foreground sm:w-[320px] mx-auto">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms-and-conditions"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
