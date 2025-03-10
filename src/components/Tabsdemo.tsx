"use client";

import { SignupFormDemo } from "@/components/signup";
import { Tabs } from "@/components/ui/tabs";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";

export function TabsDemo() {
  const tabs = [
    {
      title: "Login",
      value: "login",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-20">
          <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
              <a href="#" className="flex items-center gap-2 self-center font-medium">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                Acme Inc.
              </a>
              <LoginForm />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Signup",
      value: "signup",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-20">
        <div className="mt-10 m-10 mb-10">
          <SignupFormDemo />
        </div>
      </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
