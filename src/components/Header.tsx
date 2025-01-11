import { Star, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">Gitingest</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="gap-2">
          <Chrome className="w-4 h-4" />
          Extension
        </Button>
        <Button variant="outline" className="gap-2">
          <Star className="w-4 h-4" />
          4.6k
        </Button>
      </div>
    </header>
  );
}