import * as React from "react";

function BaseSmoothSmileyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 52 52" fill="none" {...props}>
      <path
        d="M2.468 44.505a5.47 5.47 0 019.534-5.363l.09.159a5.47 5.47 0 11-9.535 5.363l-.09-.159zM40.869 22.902a5.47 5.47 0 019.534-5.363l.09.159a5.47 5.47 0 11-9.535 5.363l-.09-.159zM17.5 48.914a5.56 5.56 0 012.12-7.573l19.174-10.787a5.56 5.56 0 115.453 9.694L25.071 51.034a5.56 5.56 0 01-7.573-2.12zM.845 19.307a5.47 5.47 0 019.534-5.363l.09.159a5.47 5.47 0 01-9.535 5.363l-.09-.159zM20.18 8.43a5.47 5.47 0 119.534-5.363l.09.16a5.47 5.47 0 11-9.535 5.363l-.09-.16z"
        fill="#EBEDFF"
      />
    </svg>
  );
}

const SmoothSmileyIcon = React.memo(BaseSmoothSmileyIcon);

export { SmoothSmileyIcon };
