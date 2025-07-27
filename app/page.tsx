import React from "react";
import Button from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="p-4">
      <p>Welcome to Tool Wikki</p>
      <div className="mt-4">
        <Button className="rounded-2xl px-6 py-2 bg-blue-600 hover:bg-blue-700">
          <Sparkles className="mr-2" /> Explore Tools
        </Button>
      </div>
    </div>
  );
}