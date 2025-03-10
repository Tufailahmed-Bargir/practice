"use client";

import { SignupFormDemo } from "@/components/signup";
import { Tabs } from "@/components/ui/tabs";

 
export default function TabsDemo() {
  const tabs = [
    {
      title: "Signup",
      value: "signup",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-20">
       
          <SignupFormDemo />
        
      </div>
      ),
    },
    {
      title: "Login",
      value: "Login",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 mb-20">
         
          <SignupFormDemo />
        
      </div>
      ),
    },
  ];

  return (
    <div className="h-[10rem] md:h-[40rem] [perspective:100px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-center  mt-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
