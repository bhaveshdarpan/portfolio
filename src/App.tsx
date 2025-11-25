import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/projects";
import Fun from "./pages/fun";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<ProjectsPage />} />
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
