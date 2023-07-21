import { Link, Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import { Provider } from "react-redux";
import store from "../Store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <MenuBar></MenuBar>
        <main>
          <Outlet></Outlet>
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
