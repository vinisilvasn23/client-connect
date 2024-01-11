import { ContactProvider } from "./provider/ContactContext/ContactContext";
import { UserProvider } from "./provider/UserContext/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ResetStyle } from "./styles/reset";

function App() {
  return (
    <UserProvider>
      <ResetStyle />
      <ContactProvider>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <RoutesMain />
      </ContactProvider>
    </UserProvider>
  );
}

export default App;
