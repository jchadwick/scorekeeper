import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { variant?: "primary" | "secondary" | "warning" | "error" };

export const Button = ({ variant, ...props }: ButtonProps) => {
  const color =
    variant === "secondary"
      ? "gray"
      : variant === "warning"
      ? "orange"
      : variant === "error"
      ? "red"
      : "blue";

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      {...props}
    />
  );
};
