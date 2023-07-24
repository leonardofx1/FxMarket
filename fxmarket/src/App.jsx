import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
