import type { InputHTMLAttributes, ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

const Input = ({ icon, className, ...props }: InputProps) => {
  return (
    <div className="relative">
      <input className={className} {...props} />

      {icon && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9F9FA9]"
        >
          {icon}
        </button>
      )}
    </div>
  );
};

export default Input;
