import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

export default function page() {
  return (
    <div className="w-full grid md:grid-cols-2 gap-4">
      <Link href="/auth/sign-in">
        <Card className="w-full">
          <CardHeader className="flex gap-3">
            <Image
              alt="rofabs logo"
              height={40}
              radius="sm"
              src="/logo.png"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Sign in to your account</p>
              <p className="text-small text-orange-500">auth/sign-in</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Enter your email and password to access your account.</p>
          </CardBody>
        </Card>
      </Link>
      <Link href="/auth/sign-up">
        <Card className="w-full">
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
              <p className="text-small text-orange-500">auth/sign-up</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Sign up to access our platform and start using our tools.</p>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
