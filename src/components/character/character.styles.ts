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
  "py-1 px-2 mx-3 border-2 rounded-[19px] text-cod-white text-sm group-[.bg-purple-light]/character:bg-purple-main group-[.bg-purple-light]/character:border-purple-dark group-[.bg-pink-light]/character:bg-pink-main group-[.bg-pink-light]/character:border-pink-dark group-[.bg-green-light]/character:bg-green-main group-[.bg-green-light]/character:border-green-dark group-[.bg-blue-light]/character:bg-blue-main group-[.bg-blue-light]/character:border-blue-dark group-[.bg-yellow-light]/character:bg-yellow-main group-[.bg-yellow-light]/character:border-yellow-dark group-[.bg-orange-light]/character:bg-orange-main group-[.bg-orange-light]/character:border-orange-dark",
  {
    variants: {
      side: {
        "top-left": "rounded-tl-sm",
        "top-right": "rounded-tr-sm",
      },
      color: {
        purple: "bg-purple-main border-purple-dark",
        pink: "bg-pink-main border-pink-dark",
        green: "bg-green-main border-green-dark",
        blue: "bg-blue-main border-blue-dark",
        yellow: "bg-yellow-main border-yellow-dark",
        orange: "bg-orange-main border-orange-dark",
      },
    },
  }
);

export const tagsItemCursorStyle = cva(
  "group-[.bg-purple-light]/character:text-purple-main group-[.bg-pink-light]/character:text-pink-main group-[.bg-green-light]/character:text-green-main group-[.bg-blue-light]/character:text-blue-main group-[.bg-yellow-light]/character:text-yellow-main group-[.bg-orange-light]/character:text-orange-main",
  {
    variants: {
      side: {
        "top-left": "",
        "top-right": "self-end -scale-x-100",
      },
      color: {
        purple: "text-purple-main",
        pink: "text-pink-main",
        green: "text-green-main",
        blue: "text-blue-main",
        yellow: "text-yellow-main",
        orange: "text-orange-main",
      },
    },
  }
);
