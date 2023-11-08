import React from "react";
import { Input } from "@material-tailwind/react";

export default function TwoColumnPage() {
  return (
    <div className="flex w-full">
      {/* Primera columna */}
      <div className="w-1/2 p-4">
        <Input variant="static" label="Static" placeholder="Static" />
      </div>

      {/* Segunda columna */}
      <div className="w-1/2 p-4">
        {/* Contenido para la segunda columna */}
        <Input variant="static" label="Static" placeholder="Static" />
      </div>
    </div>
  );
}