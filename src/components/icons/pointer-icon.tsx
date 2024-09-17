import * as React from "react";

function BasePointerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40%" height="40%" viewBox="0 0 120 101" fill="none" {...props}>
      <path
        d="M.004 22.662L120 .92l-59.998 99.507-13.846-50.113L.004 22.662z"
        fill="currentColor"
      />
    </svg>
  );
}

const PointerIcon = React.memo(BasePointerIcon);
export default PointerIcon;
