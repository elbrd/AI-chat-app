import { useChatStore } from "../stores/useChatStore";
import ReactMarkdown from "react-markdown";

const AnswerContainer = () => {
  const prompt = useChatStore((state) => state.prompt);

  const chatsession = useChatStore((state) => state.chatsession);

  const error = useChatStore((state) => state.error);
  const loading = useChatStore((state) => state.loading);

  return (
    <div
      className="
        flex flex-col gap-4
        p-4
        flex-1
      "
    >
      {chatsession &&
        chatsession.map((chat, index) => {
          if (chat.role === "user") {
            return (
              <div
                key={`${chat.role}-${index}`}
                className="
                p-4
                bg-mauve-500
                text-white
                rounded-xl
                max-w-3/4
                place-self-end
              "
              >
                <p>{chat.content}</p>
              </div>
            );
          } else {
            return (
              <div
                key={`${chat.role}-${index}`}
                className="markdown max-w-3xl leading-7 mb-4"
              >
                <ReactMarkdown>{chat.content}</ReactMarkdown>
              </div>
            );
          }
        })}

      {prompt && (
        <div
          className="
            p-4
            bg-mauve-500
            text-white
            rounded-xl
            max-w-3/4
            place-self-end
          "
        >
          <p>{prompt}</p>
        </div>
      )}

      {loading && (
        <div className="oi-regular text-(--color-text-primary) tracking-widest">
          <p>....</p>
        </div>
      )}

      {error && (
        <div className="max-w-3xl leading-7">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default AnswerContainer;
