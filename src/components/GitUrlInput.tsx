import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function GitUrlInput() {
  const [url, setUrl] = useState("");

  const handleIngest = () => {
    console.log("Ingesting:", url);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl">
      <Input
        type="text"
        placeholder="https://github.com/cyclotruc/gitingest"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1"
      />
      <Button 
        className="bg-coral hover:bg-coral-hover text-white"
        onClick={handleIngest}
      >
        Ingest
      </Button>
    </div>
  );
}