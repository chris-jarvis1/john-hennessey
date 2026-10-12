import type { SVGProps } from "react";

type ArrowDirection = "up-right" | "down-right" | "down" | "up";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowIcon({ direction = "up-right", ...props }: IconProps & { direction?: ArrowDirection }) {
  const paths: Record<ArrowDirection, string> = {
    "up-right": "M7 17 17 7M8 7h9v9",
    "down-right": "m7 7 10 10m0-9v9H8",
    down: "M12 4v16m-7-7 7 7 7-7",
    up: "M12 20V4m-7 7 7-7 7 7",
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d={paths[direction]} />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
    </svg>
  );
}

export function DiamondIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" width="1em" height="1em" fill="none" stroke="none" {...props}>
      <path d="m6 0 6 6-6 6-6-6z" fill="currentColor" />
    </svg>
  );
}
