import AnswerContainer from "../components/AnswerContainer";
import ChatForm from "../components/ChatForm";

const StartPage = () => {
  return (
    <div
      className="
        flex flex-col gap-4 min-h-[80vh] min-w-full
      "
    >
      <AnswerContainer />
      <ChatForm />
    </div>
  );
};

export default StartPage;
