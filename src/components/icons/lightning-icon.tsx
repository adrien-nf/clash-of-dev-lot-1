import * as React from "react";

function BaseLightningIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40%" height="40%" viewBox="0 0 125 105" fill="none" {...props}>
      <path
        d="M124.159 25.19L71.232.51 15.746 49.459l26.827 12.51L.012 104.118l95.346-39.982-33.626-15.68L124.16 25.19z"
        fill="currentColor"
      />
    </svg>
  );
}

const LightningIcon = React.memo(BaseLightningIcon);

export { LightningIcon };
