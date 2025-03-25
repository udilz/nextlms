import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "rounded-lg overflow-hidden border border-slate-200 bg-white p-8 shadow-sm shadow-slate-100",
});

type TCard = VariantProps<typeof style>;
interface ICard extends TCard, React.ComponentPropsWithRef<"div"> {}

export const Card = (props: ICard) => {
  return (
    <div {...props} className={twMerge(style({ ...props }), props.className)}>
      {props.children}
    </div>
  );
};
