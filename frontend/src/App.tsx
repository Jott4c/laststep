import { ToastContainer } from "react-toastify";
import "./App.css";
import MyRoute from "./routers";
import { GlobalStyle } from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <GlobalStyle />
      <MyRoute />
    </div>
  );
}
export default App;
