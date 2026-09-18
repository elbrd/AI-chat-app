import { useEffect } from "react";
import Header from "./components/Header";
import StartPage from "./pages/StartPage";
import { useChatStore } from "./stores/useChatStore";

function App() {
  const fetchChatsession = useChatStore((state) => state.fetchChatsession);
  useEffect(() => {
    fetchChatsession();
  }, [fetchChatsession]);

  return (
    <div
      className="
        flex flex-col 
        min-h-screen 
        bg-(--color-bg)
      "
    >
      <Header />
      <main
        className="
          flex flex-1 items-center 
          mx-auto 
          w-full 
          max-w-6xl 
          px-4 md:px-8
        "
      >
        <StartPage />
      </main>
    </div>
  );
}

export default App;
