"use client";
import React from "react";
import { Input, Checkbox, Button } from "@nextui-org/react";
import { EyeIcon, EyeOff } from "lucide-react";
import Image from "next/image";
import Rofabs from "@/assets/logo.png";
import Link from "next/link";

export default function page() {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="w-full flex gap-3 flex-col max-w-[460px] mx-auto bg-[rgba(225,225,225,0.2)] backdrop-blur-3xl rounded-2xl p-8">
      <div className="flex flex-col space-y-2 text-center">
        <Image
          src={Rofabs}
          alt="Rofabs LLP"
          width={100}
          height={100}
          placeholder="blur"
          className="aspect-square h-[100px] w-[100px] mx-auto"
        />
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password to log in
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="underlined"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Input
          label="Password"
          variant="underlined"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-full"
        />
      </div>
      <div className="flex flex-row gap-4 justify-between items-center mt-2">
        <Checkbox color="primary">Remember me</Checkbox>
        <Link href="/auth/forgot-password" className="text-blue-700">
          forgot password?
        </Link>
      </div>
      <div className="flex flex-row gap-4 justify-between items-center mt-2">
        <Button size="lg" radius="sm" className="w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white">Sign In</Button>
      </div>
    </div>
  );
}
