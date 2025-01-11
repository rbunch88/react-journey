import { Button } from "@/components/ui/button";

interface ExampleButtonProps {
  name: string;
  onClick: () => void;
}

export function ExampleButton({ name, onClick }: ExampleButtonProps) {
  return (
    <Button
      variant="outline"
      className="bg-secondary border-gray-800 hover:border-codeium hover:bg-transparent hover:text-codeium transition-colors"
      onClick={onClick}
    >
      {name}
    </Button>
  );
}