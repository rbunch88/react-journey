import { Header } from "@/components/Header";
import { GitUrlInput } from "@/components/GitUrlInput";
import { ExampleButton } from "@/components/ExampleButton";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { RepositoryResults } from "@/components/RepositoryResults";
import { useState } from "react";

const EXAMPLE_REPOS = ["GitIngest", "FastAPI", "Flask", "Tldraw", "ApiAnalytics"];

export default function Index() {
  const [showResults, setShowResults] = useState(false);

  const handleExampleClick = (repo: string) => {
    console.log("Selected example:", repo);
    setShowResults(true);
  };

  const handleIngest = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container py-8 px-4 mx-auto max-w-6xl">
        <Header />
        
        <main className="flex flex-col items-center gap-8">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">Prompt-friendly</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Turn any Git repository into a simple text digest of its codebase.
              This is useful for feeding a codebase into any LLM.
            </p>
          </div>

          <GitUrlInput onIngest={handleIngest} />

          <div className="w-full max-w-2xl space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-300">Exclude</span>
                <Input 
                  placeholder="*.md, src/"
                  className="max-w-[200px] bg-secondary border-gray-800 focus-visible:ring-codeium focus-visible:ring-offset-0"
                />
              </div>
              
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-300">Include files under:</span>
                <Slider 
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <span className="text-sm text-gray-500">50kb</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-400">Try these example repositories:</p>
              <div className="flex flex-wrap gap-2">
                {EXAMPLE_REPOS.map((repo) => (
                  <ExampleButton
                    key={repo}
                    name={repo}
                    onClick={() => handleExampleClick(repo)}
                  />
                ))}
              </div>
            </div>
          </div>

          {showResults && <RepositoryResults />}

          <p className="text-sm text-gray-500 mt-8">
            You can also replace 'hub' with 'ingest' in any GitHub URL
          </p>
        </main>
      </div>
    </div>
  );
}