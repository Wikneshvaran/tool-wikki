"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ToolsList() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    setTools([
      {
        title: "JSON to CSV Converter",
        description: "Convert JSON data into CSV format easily.",
        link: "/tools/json-to-csv"
      },
      {
        title: "PDF Merger",
        description: "Merge multiple PDF files into one.",
        link: "/tools/pdf-merge"
      },
      {
        title: "Text Analyzer",
        description: "Analyze text: word count, character count, and more.",
        link: "/tools/text-analyzer"
      },
    ]);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <Card key={index} className="rounded-2xl shadow p-4">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
            <Link href={tool.link}>
              <Button className="w-full">Open Tool</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}