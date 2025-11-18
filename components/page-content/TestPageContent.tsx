"use client";

import { Canvas, Rect } from "fabric";
import * as fabric from "fabric";
import { useEffect, useRef } from "react";

export default function TestPageContent() {
  const canvasRef = useRef<Canvas | undefined>(undefined);

  useEffect(() => {
    const c = new Canvas("canvas", {
      height: 400,
      width: 800,
      backgroundColor: "black",
    });

    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#2BEBC8";
    fabric.Object.prototype.cornerStyle = "rect";
    fabric.Object.prototype.cornerStrokeColor = "#2BEBC8";
    fabric.Object.prototype.cornerSize = 6;

    canvasRef.current = c;

    return () => {
      c.dispose();
    };
  }, []);

  const addRect = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = new Rect({
      height: 280,
      width: 200,
      stroke: "#2BEBC8",
    });
    canvas.add(rect);
    canvas.requestRenderAll();
  };

  return (
    <div>
      <button onClick={addRect}>Rectangle</button>
      <canvas id="canvas" />
    </div>
  );
}
