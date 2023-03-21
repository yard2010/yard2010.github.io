import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

function drawSpirograph(ctx: CanvasRenderingContext2D | null) {
  if (!ctx) {
    return;
  }

  const R = 480;
  const k = 2 / 3 + Math.sqrt(2);
  const h = 0.75;
  const tDelta = 1 / (Math.PI * 2) / 4;

  let t = 0;
  let lastX: number | null = null;
  let lastY: number | null = null;
  const drawFrame = () => {
    t += tDelta;

    const x = (1 - k) * Math.cos(t) + h * k * Math.cos(((1 - k) / k) * t);
    const y = (1 - k) * Math.sin(t) - h * k * Math.sin(((1 - k) / k) * t);

    const targetX = x * R + ctx.canvas.clientWidth / 2 - 300;
    const targetY = y * R + ctx.canvas.clientHeight / 2 - 200;

    ctx.beginPath();
    ctx.lineWidth = 16;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ffcf7d";
    // ctx.globalAlpha = 0.35;

    if (lastX === null || lastY === null) {
      lastX = targetX;
      lastY = targetY;
    }

    ctx.moveTo(lastX, lastY);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();

    lastX = targetX;
    lastY = targetY;

    ctx.globalCompositeOperation = "destination-out";
    ctx.globalAlpha = 0.01;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;

    requestAnimationFrame(drawFrame);
  };
  requestAnimationFrame(drawFrame);
}

const Container = styled.div({
  width: "100%",
  height: "100%",
});

const Canvas = styled.canvas({
  width: "100%",
  height: "100%",
});

const Spirograph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.height === undefined || windowSize.width === undefined) {
      return;
    }
    setTimeout(() => {
      const canvasWidth = canvasRef.current?.width || 0;
      const canvasHeight = canvasRef.current?.height || 0;
      canvasRef.current
        ?.getContext("2d")
        ?.clearRect(0, 0, canvasWidth, canvasHeight);
    }, 250);
  }, [windowSize]);

  useEffect(() => {
    if (canvasRef.current !== null) {
      canvasRef.current.width = canvasRef.current.offsetWidth;
      canvasRef.current.height = canvasRef.current.offsetHeight;
      drawSpirograph(canvasRef.current.getContext("2d"));
    }
  }, []);

  return (
    <Container>
      <Canvas ref={canvasRef}></Canvas>
    </Container>
  );
};

export { Spirograph };
