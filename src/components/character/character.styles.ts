import { cva } from "class-variance-authority";

export const characterStyles = cva(
  "w-full flex flex-col gap-10 rounded-[60px] p-10 group/character overflow-hidden relative",
  {
    variants: {
      color: {
        purple: "bg-purple-light",
        pink: "bg-pink-light",
        green: "bg-green-light",
        blue: "bg-blue-light",
        yellow: "bg-yellow-light",
        orange: "bg-orange-light",
      },
    },
  }
);

export const tagsItemStyle = cva(
  "py-1.5 px-3 ml-3 border-2 rounded-[19px] text-cod-white text-sm group-[.bg-purple-light]/character:bg-purple-main group-[.bg-purple-light]/character:border-purple-dark group-[.bg-pink-light]/character:bg-pink-main group-[.bg-pink-light]/character:border-pink-dark group-[.bg-green-light]/character:bg-green-main group-[.bg-green-light]/character:border-green-dark group-[.bg-blue-light]/character:bg-blue-main group-[.bg-blue-light]/character:border-blue-dark group-[.bg-yellow-light]/character:bg-yellow-main group-[.bg-yellow-light]/character:border-yellow-dark group-[.bg-orange-light]/character:bg-orange-main group-[.bg-orange-light]/character:border-orange-dark",
  {
    variants: {
      side: {
        "top-left": "rounded-tl-sm",
        "top-right": "rounded-tr-sm",
        "bottom-left": "rounded-bl-sm",
        "bottom-right": "rounded-br-sm",
      },
    },
  }
);
