import { useContext } from "react";
import "./scss/main.scss";
import "./Tailwind/output.css";
import { ThemeContext } from "./context/ThemeContext";
import { ToastProvider } from "react-toast-notifications";
import Routes from "./Routes/Routes";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <ToastProvider autoDismiss={true}>
        <Routes />
      </ToastProvider>
    </>
  );
}

export default App;
   