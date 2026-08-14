import { useChatStore } from "../stores/useChatStore";
import ReactMarkdown from "react-markdown";

const AnswerContainer = () => {
  const prompt = useChatStore((state) => state.prompt);
  const answer = useChatStore((state) => state.answer);
  const sources = useChatStore((state) => state.sources);

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

      {answer && (
        <div className="markdown max-w-3xl leading-7">
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}

      {sources && (
        <div className="markdown max-w-3xl leading-7">
          <h3>Källor</h3>
          <ul>
            {sources.map((src) => {
              return (
                <li key={src.title}>
                  <a
                    className="underline"
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {src.title}
                  </a>
                </li>
              );
            })}
          </ul>
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
