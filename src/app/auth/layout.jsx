import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="container relative md:min-h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:p-10 p-2 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#031264] via-[#182e9f] to-slate-950 bg-center bg-cover">
        <div className="relative h-full flex-col bg-muted p-10 rounded-[30px] overflow-hidden text-white lg:flex dark:border-r dark:border-slate-700">
          <div className="absolute inset-0 bg-[url('/bg-login.svg')] bg-center bg-cover rounded-br-full" />
          <Link
            href="/"
            className="relative z-20 flex items-center text-lg font-medium w-min whitespace-nowrap"
          >
            Rofabs LLP.
          </Link>
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
        <div className="lg:px-8 md:mt-0 mt-20">
          <div className="mx-auto flex w-full flex-col justify-start items-start space-y-6 sm:w-full relative">
            {children}
            <div className="block h-[360px] w-[360px] overflow-hidden border-blue-700 rounded-[40%_60%_60%_40%/55%_67%_33%_45%] transition-all duration-500 bg-gradient-to-tr from-indigo-900 to-cyan-500 absolute left-2 -top-16 z-0"></div>
            <div className="block h-[360px] w-[360px] overflow-hidden border-blue-700 rounded-[40%_60%_60%_40%/55%_67%_33%_45%] transition-all duration-500 bg-gradient-to-tr from-indigo-900 to-cyan-500 absolute right-2 bottom-2 z-0"></div>
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
