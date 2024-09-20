import clsx from "clsx";

type Props = {
  rightIcon?: React.ReactNode;
} & React.HTMLProps<HTMLInputElement>;

const Input = ({ rightIcon, className, ...props }: Props) => {
  return (
    <div
      className={clsx(
        "p-2 border-neutral border flex gap-1 items-center rounded-lg focus-within:border-text-high transition-colors",
        className
      )}>
      {rightIcon}
      <input
        {...props}
        className="w-full outline-none bg-transparent text-text-high"
      />
    </div>
  );
};

export default Input;
