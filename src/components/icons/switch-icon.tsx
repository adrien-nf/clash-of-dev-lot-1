import * as React from "react";

function BaseSwitchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="60%" height="60%" viewBox="0 0 207 195" fill="none" {...props}>
      <path
        d="M45.985 72.033c7.025-14.62 24.527-20.749 39.09-13.713l62.278 30.09c14.569 7.04 20.702 24.601 13.673 39.228-7.024 14.62-24.526 20.749-39.088 13.713l-62.28-30.091c-14.568-7.039-20.7-24.6-13.673-39.227z"
        stroke="#FFFAC2"
        strokeWidth={9.133}
      />
      <rect
        x={124.168}
        y={87.956}
        width={40}
        height={40}
        rx={20}
        transform="rotate(25 124.168 87.956)"
        fill="currentColor"
      />
    </svg>
  );
}

const SwitchIcon = React.memo(BaseSwitchIcon);

export { SwitchIcon };
