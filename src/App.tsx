import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Work from "./pages/work";
import Fun from "./pages/fun";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col flex-1 max-w-7xl mx-auto">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Work />} />
              <Route path="/fun" element={<Fun />} />
              {/* <Route path="/about" element={<About />} />  */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
