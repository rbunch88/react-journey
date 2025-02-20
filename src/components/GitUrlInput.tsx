import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GitUrlInputProps {
  onIngest?: () => void;
}

export function GitUrlInput({ onIngest }: GitUrlInputProps) {
  const [url, setUrl] = useState("");

  const handleIngest = () => {
    console.log("Ingesting:", url);
    onIngest?.();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl">
      <Input
        type="text"
        placeholder="https://github.com/cyclotruc/gitingest"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 bg-secondary border-gray-800 focus-visible:ring-codeium focus-visible:ring-offset-0"
      />
      <Button 
        className="bg-codeium hover:bg-codeium-hover text-black font-semibold"
        onClick={handleIngest}
      >
        Ingest
      </Button>
    </div>
  );
}