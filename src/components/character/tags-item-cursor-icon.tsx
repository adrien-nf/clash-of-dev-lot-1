import * as React from "react";

function BaseTagsItemCursorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d_23_1224)">
        <path
          d="M5.825 14L4.087 2.89 14 8.22 8.942 9.74 5.825 14z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_23_1224"
          x={2.823}
          y={2.259}
          width={12.441}
          height={13.637}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={0.632} />
          <feGaussianBlur stdDeviation={0.632} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_23_1224"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_23_1224"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

const TagsItemCursorIcon = React.memo(BaseTagsItemCursorIcon);
export { TagsItemCursorIcon };
