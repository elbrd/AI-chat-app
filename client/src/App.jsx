import Header from "./components/Header";
import StartPage from "./pages/StartPage";

function App() {
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
