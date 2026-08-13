import { useEffect, useState } from "react";
import { useChatStore } from "../stores/useChatStore";
import Button from "./Button";
import Input from "./Input";

const ChatForm = () => {
  const sendPrompt = useChatStore((state) => state.sendPrompt);

  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await sendPrompt(prompt);

    setPrompt("");
  };

  return (
    <form className="flex flex-row gap-4 items-center">
      <Input
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <Button onClick={handleSubmit} disabled={!prompt ? true : false} />
    </form>
  );
};

export default ChatForm;
