import type { Project } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  cover: Project["cover"];
  className?: string;
};

export function ProjectCover({ cover, className }: Props) {
  return (
    <div
      className={cn("relative isolate overflow-hidden bg-elevated", className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 800 520"
        className="size-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {cover === "rex" ? <RexArt /> : null}
        {cover === "sports" ? <SportsArt /> : null}
        {cover === "outbound" ? <OutboundArt /> : null}
        {cover === "cluster" ? <ClusterArt /> : null}
        {cover === "canvas" ? <CanvasArt /> : null}
        {cover === "content" ? <ContentArt /> : null}
      </svg>
    </div>
  );
}

function RexArt() {
  return (
    <g stroke="#f3efe6">
      <rect x="48" y="48" width="704" height="424" opacity="0.22" strokeWidth="1.4" />
      <path
        d="M120 400 L250 210 L310 310 L410 96 L490 210 L560 150 L680 400 Z"
        opacity="0.7"
        strokeWidth="1.8"
      />
      <path d="M410 96 L430 48 L458 110" opacity="0.9" strokeWidth="1.8" />
      <path d="M250 210 L410 96 L560 150" opacity="0.25" strokeWidth="1.2" />
      <circle cx="410" cy="96" r="10" fill="#f3efe6" stroke="none" opacity="0.9" />
      <path d="M72 72 H220 M72 92 H160" opacity="0.35" strokeWidth="1.4" />
      <rect x="520" y="292" width="196" height="140" opacity="0.28" strokeWidth="1.4" />
      <path d="M520 292 L716 432" opacity="0.35" strokeWidth="1.2" />
      <path d="M140 432 H360" opacity="0.2" strokeWidth="1.2" />
    </g>
  );
}

function SportsArt() {
  return (
    <g stroke="#f3efe6">
      <ellipse cx="400" cy="276" rx="280" ry="86" opacity="0.16" strokeWidth="1.4" />
      <ellipse cx="400" cy="276" rx="196" ry="56" opacity="0.28" strokeWidth="1.4" />
      <path
        d="M130 276 L250 168 L550 168 L670 276 L550 384 L250 384 Z"
        opacity="0.72"
        strokeWidth="1.8"
      />
      <path d="M250 168 L400 276 L550 168" opacity="0.32" strokeWidth="1.3" />
      <path d="M250 384 L400 276 L550 384" opacity="0.32" strokeWidth="1.3" />
      <circle cx="400" cy="276" r="12" fill="#f3efe6" stroke="none" opacity="0.9" />
      <path d="M72 72 H168 M72 92 H128" opacity="0.3" strokeWidth="1.4" />
      <path d="M160 276 H240 M560 276 H640" opacity="0.4" strokeWidth="1.6" />
    </g>
  );
}

function OutboundArt() {
  return (
    <g stroke="#f3efe6">
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={i}
          d={`M64 ${88 + i * 44} H736`}
          opacity={0.14 + (i % 4) * 0.08}
          strokeWidth="1.3"
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <rect
          key={`r-${i}`}
          x={88 + i * 128}
          y={148 + (i % 2) * 36}
          width="108"
          height="64"
          opacity="0.45"
          strokeWidth="1.6"
        />
      ))}
      <path d="M88 392 H712" opacity="0.7" strokeWidth="1.8" />
      <circle cx="712" cy="392" r="8" fill="#f3efe6" stroke="none" opacity="0.95" />
      <path d="M88 392 L200 300" opacity="0.3" strokeWidth="1.2" />
    </g>
  );
}

function ClusterArt() {
  const nodes = [
    [400, 250],
    [210, 128],
    [590, 128],
    [140, 292],
    [660, 292],
    [250, 412],
    [550, 412],
    [400, 92],
    [286, 228],
    [514, 228],
    [400, 372],
  ];
  return (
    <g stroke="#f3efe6">
      {nodes.slice(1).map(([x, y], i) => (
        <path
          key={i}
          d={`M400 250 L${x} ${y}`}
          opacity="0.32"
          strokeWidth="1.3"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={`n-${i}`}
          cx={x}
          cy={y}
          r={i === 0 ? 12 : 7}
          fill={i === 0 ? "#f3efe6" : "none"}
          opacity={i === 0 ? 0.95 : 0.75}
          strokeWidth="1.5"
        />
      ))}
    </g>
  );
}

function CanvasArt() {
  return (
    <g stroke="#f3efe6">
      <rect x="100" y="72" width="380" height="300" opacity="0.22" strokeWidth="1.4" />
      <rect x="280" y="140" width="400" height="300" opacity="0.4" strokeWidth="1.7" />
      <rect x="210" y="200" width="260" height="196" opacity="0.62" strokeWidth="1.8" />
      <path
        d="M210 200 L280 140 M470 200 L680 140 M210 396 L280 440 M470 396 L680 440"
        opacity="0.28"
        strokeWidth="1.3"
      />
    </g>
  );
}

function ContentArt() {
  return (
    <g stroke="#f3efe6">
      <rect x="140" y="72" width="520" height="376" opacity="0.24" strokeWidth="1.5" />
      <path
        d="M200 140 H600 M200 188 H540 M200 236 H580 M200 284 H500"
        opacity="0.55"
        strokeWidth="1.6"
      />
      <circle cx="236" cy="372" r="26" opacity="0.55" strokeWidth="1.6" />
      <circle cx="312" cy="372" r="26" opacity="0.38" strokeWidth="1.6" />
      <circle cx="388" cy="372" r="26" opacity="0.22" strokeWidth="1.6" />
    </g>
  );
}
