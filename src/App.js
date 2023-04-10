import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </Provider>
    </>
  );
}

export default App;
