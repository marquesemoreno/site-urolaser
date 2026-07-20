import React from "react";
import { Grid2X2, List } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ViewModeControlsProps {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

const ViewModeControls = ({ viewMode, setViewMode }: ViewModeControlsProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-xl font-semibold text-foreground">Artigos Recentes</h2>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className={viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-foreground"}
          onClick={() => setViewMode("grid")}
        >
          <Grid2X2 className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={viewMode === "list" ? "bg-primary text-primary-foreground" : "text-foreground"}
          onClick={() => setViewMode("list")}
        >
          <List className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ViewModeControls;
