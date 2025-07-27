import ToolsList from "@/components/ToolsList";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">🔧 Tool Wikki</h1>
        <p className="text-lg text-gray-600">
          One place for all your essential tools – fast, free, and useful.
        </p>
        <div className="mt-4">
          <Button className="rounded-2xl px-6 py-2 bg-blue-600 hover:bg-blue-700">
            <Sparkles className="mr-2" /> Explore Tools
          </Button>
        </div>
      </section>

      <ToolsList />

      <section className="text-center mt-12">
        <h2 className="text-xl font-semibold mb-2">Support Tool Wikki ❤️</h2>
        <p className="text-gray-500 mb-4">
          Found it useful? Help us grow by sharing or donating!
        </p>
        <Button className="bg-green-500 hover:bg-green-600 rounded-xl px-6">
          Donate via UPI
        </Button>
      </section>
    </main>
  );
}