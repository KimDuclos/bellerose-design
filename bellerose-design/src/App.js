import TopBar from "./top-bar.jsx";
import Logo from "./logo.jsx";
import Navbar from "./navbar.jsx";
import HamMenu from "./ham-menu.jsx";
import Footer from "./footer.jsx";
import "./App.scss";

function App() {
  return (
    <>
      <TopBar />
      <Logo />
      <HamMenu />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
