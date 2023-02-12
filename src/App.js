import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Loader from "./components/Loader";
import SoundBar from "./components/SoundBar";
import About from "./elements/About";
import Contacto from "./elements/Contacto";
import Error404 from "./elements/Error404";
import Home from "./elements/Home";
import Work from "./elements/Work";
import GlobalStyle from "./style/GlobalStyle";
import { dark } from "./style/Theme";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <AnimatePresence>
          {loaded ? null : <Loader />}
          <SoundBar />
          <main className="App" ref={containerRef}>
            <HashRouter>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/contacto" element={<Contacto />} />

                <Route path="*" element={<Error404 />} />
              </Routes>
            </HashRouter>
          </main>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
