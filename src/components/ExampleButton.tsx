import { Button } from "@/components/ui/button";

interface ExampleButtonProps {
  name: string;
  onClick: () => void;
}

export function ExampleButton({ name, onClick }: ExampleButtonProps) {
  return (
    <Button
      variant="outline"
      className="bg-cream border-gray-300 hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      {name}
    </Button>
  );
}