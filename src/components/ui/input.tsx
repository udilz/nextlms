"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import {tv, type VariantProps} from "tailwind-variants";

const style = tv({
  base: "block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold shadow-md shadow-slate-100 transition duration-200 placeholder:font-normal focus:border-indigo-600 focus:outline-indigo-600 focus:ring-4 focus:ring-indigo-100",
})

type TInput = VariantProps<typeof style>
interface IInput extends TInput, React.ComponentPropsWithRef<"input"> {}

export const Input = (props: IInput) => {
  return <input {...props} className={twMerge(style({...props}), props.className)}/>
}
