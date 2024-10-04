"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import Image from "next/image";
import Rofabs from "@/assets/logo.png";
import Link from "next/link";

export default function page() {
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
          Reset your account password
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to get magic link for your account
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
            input: [
              "!text-white",
              "placeholder:text-white/60",
              "bg-transparent",
            ],
          }}
        />
      </div>
      <div className="flex flex-col gap-4 justify-between items-center mt-2">
        <Button
          size="lg"
          radius="sm"
          className="w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white"
        >
          Send magic link
        </Button>
        <Link
          href="/auth"
          className="relative z-20 flex items-center text-lg font-medium w-min whitespace-nowrap"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
