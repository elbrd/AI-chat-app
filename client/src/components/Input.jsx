const Input = () => {
  return (
    <input
      type="text"
      placeholder="Fråga något..."
      className="
        border-0 
        border-(--color-border)
        p-4
        bg-white
        rounded-xl
        flex-1
      "
    />
  );
};

export default Input;
