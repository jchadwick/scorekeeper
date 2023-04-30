import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "warning" | "error";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { variant?: ButtonVariant };

export const Button = ({ variant, ...props }: ButtonProps) => {
  const bgColor =
    variant === "secondary"
      ? "gray"
      : variant === "warning"
      ? "orange"
      : variant === "error"
      ? "red"
      : "blue";

  return (
    <button
      className={`bg-${bgColor}-500 hover:bg-${bgColor}-700 text-white font-bold py-2 px-4 rounded`}
      {...props}
    />
  );
};
