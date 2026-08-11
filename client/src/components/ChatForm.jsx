import Button from "./Button";
import Input from "./Input";

const ChatForm = () => {
  return (
    <div
      className="
      min-w-full
      flex flex-row gap-4
      items-center
    "
    >
      <Input />
      <Button />
    </div>
  );
};

export default ChatForm;
