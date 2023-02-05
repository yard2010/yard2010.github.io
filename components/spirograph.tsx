import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

function drawSpirograph(ctx: CanvasRenderingContext2D | null) {
  if (!ctx) {
    return;
  }

  const R = 480;
  const k = 2 / 3 + Math.sqrt(2);
  const h = 0.75;
  const tDelta = 1 / (Math.PI * 2) / 2;

  let t = 0;
  let lastX: number | null = null;
  let lastY: number | null = null;
  const drawFrame = () => {
    t += tDelta;

    const x = (1 - k) * Math.cos(t) + h * k * Math.cos(((1 - k) / k) * t);
    const y = (1 - k) * Math.sin(t) - h * k * Math.sin(((1 - k) / k) * t);

    const targetX = x * R + ctx.canvas.clientWidth / 2;
    const targetY = y * R + ctx.canvas.clientHeight / 2;

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.lineCap = "butt";
    ctx.strokeStyle = "hotpink";
    ctx.globalAlpha = 0.35;

    if (lastX === null || lastY === null) {
      lastX = targetX;
      lastY = targetY;
    }

    ctx.moveTo(lastX, lastY);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();

    lastX = targetX;
    lastY = targetY;

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
