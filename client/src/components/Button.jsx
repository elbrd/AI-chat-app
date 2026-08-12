import { ArrowUp } from "lucide-react";

const Button = ({ onClick, disabled }) => {
  return (
    <button
      className="
        rounded-full
        bg-(--color-text-secondary)
        p-4
        cursor-pointer
        hover:bg-mauve-600 hover:hand
        disabled:opacity-50 disabled:hover:bg-mauve-700
      "
      onClick={onClick}
      disabled={disabled}
    >
      <ArrowUp size={18} strokeWidth={2.5} color="white" />
    </button>
  );
};

export default Button;
