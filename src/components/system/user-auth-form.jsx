"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Checkbox,
  Button,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeOff } from "lucide-react";
import Rofabs from "@/assets/logo.png";

export default function UserAuthForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="w-full flex gap-3 flex-col z-50 max-w-[500px] mx-auto bg-[rgba(225,225,225,0.2)] text-white backdrop-blur-3xl rounded-2xl p-8">
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
          Enter your details below to login in your account
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          variant="underlined"
          classNames={{
            label: "!text-white",
            input: ["!text-white", "placeholder:text-white/60", "bg-transparent",],
          }}
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
          classNames={{
            label: "!text-white",
            input: ["!text-white", "placeholder:text-white/60", "bg-transparent", "max-w-full"],
          }}
        />
      </div>
      <div className="flex flex-row gap-4 justify-between items-center mt-2">
        <Checkbox defaultSelected color="primary">
          Remember me.
        </Checkbox>
        <Link href="/auth/forgot-password" className="text-blue-100">
          forgot password?
        </Link>
      </div>
      <div className="flex flex-row gap-4 justify-between items-center mt-2">
        <Button
          size="lg"
          radius="sm"
          className="w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white"
        >
          Sign In
        </Button>
      </div>
      <div className="flex flex-row gap-4 justify-between items-center mt-2">
        <Card className="w-full bg-transparent backdrop-blur-3xl shadow-none relative">
          <CardHeader className="flex gap-3">
            <Image
              alt="rofabs logo"
              height={40}
              radius="sm"
              src="/logo.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Create a new account</p>
              <p className="text-small text-blue-200">auth/sign-up</p>
            </div>
          </CardHeader>
          <Divider className="bg-slate-50" />
          <CardBody>
            <p>Sign up to access our platform and start using our tools.</p>
          </CardBody>
          <Button
            radius="sm"
            size="sm"
            className="w-min whitespace-nowrap absolute md:top-2 top-[37%] md:right-2 -right-[15%] md:transform md:rotate-0 rotate-90 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            Request Access
          </Button>
        </Card>
      </div>
    </div>
  );
}
