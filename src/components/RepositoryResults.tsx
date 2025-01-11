import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface RepositoryResultsProps {
  repoName?: string;
  filesAnalyzed?: number;
  estimatedTokens?: string;
  directoryStructure?: string;
  filesContent?: string;
}

export function RepositoryResults({
  repoName = "cyclotruc/gitingest",
  filesAnalyzed = 49,
  estimatedTokens = "45.4k",
  directoryStructure = `Directory structure:
└── cyclotruc-gitingest/
    ├── README.md
    ├── CODE_OF_CONDUCT.md
    ├── Dockerfile
    ├── LICENSE
    ├── SECURITY.md
    └── pyproject.toml`,
  filesContent = ""
}: RepositoryResultsProps) {
  const { toast } = useToast();

  const handleCopy = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    toast({
      description: `${section} copied to clipboard`,
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([directoryStructure + "\n\n" + filesContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "repository-digest.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast({
      description: "Repository digest downloaded",
    });
  };

  return (
    <div className="w-full space-y-6 mt-8">
      <Card className="bg-secondary border-gray-800 p-6">
        <div className="space-y-2">
          <p className="font-mono text-foreground">Repository: {repoName}</p>
          <p className="font-mono text-foreground">Files analyzed: {filesAnalyzed}</p>
          <p className="font-mono text-foreground">Estimated tokens: {estimatedTokens}</p>
        </div>
      </Card>

      <div className="flex gap-2">
        <Button
          onClick={handleDownload}
          className="bg-codeium hover:bg-codeium-hover text-black font-semibold"
        >
          <Download className="w-4 h-4 mr-2" /> Download
        </Button>
        <Button
          onClick={() => handleCopy(directoryStructure + "\n\n" + filesContent, "All content")}
          className="bg-codeium hover:bg-codeium-hover text-black font-semibold"
        >
          <Copy className="w-4 h-4 mr-2" /> Copy all
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-foreground">Directory Structure</h3>
          <Button
            onClick={() => handleCopy(directoryStructure, "Directory structure")}
            className="bg-codeium hover:bg-codeium-hover text-black font-semibold"
          >
            <Copy className="w-4 h-4 mr-2" /> Copy
          </Button>
        </div>
        <Card className="border-gray-800">
          <ScrollArea className="h-[200px] w-full rounded-md bg-secondary p-4">
            <pre className="font-mono text-sm text-foreground">{directoryStructure}</pre>
          </ScrollArea>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-foreground">Files Content</h3>
          <Button
            onClick={() => handleCopy(filesContent, "Files content")}
            className="bg-codeium hover:bg-codeium-hover text-black font-semibold"
          >
            <Copy className="w-4 h-4 mr-2" /> Copy
          </Button>
        </div>
        <Card className="border-gray-800">
          <ScrollArea className="h-[200px] w-full rounded-md bg-secondary p-4">
            <pre className="font-mono text-sm text-foreground">{filesContent}</pre>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
}