import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Work from "./pages/work";
import Fun from "./pages/fun";
import NotFound from "./components/NotFound";
import BicycleParking from "./pages/projects/BicycleParking";
import IndradhanuWebsite from "./pages/projects/IndradhanuWebsite";
import { Analytics } from "@vercel/analytics/react";
// import IndradhanuBranding from "./pages/projects/IndradhanuBranding";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col flex-1 max-w-7xl mx-auto">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Work />} />
              <Route path="/fun" element={<Fun />} />
              {/* <Route path="/about" element={<About />} />  */}

              <Route path="/indradhanuwebsite" element={<IndradhanuWebsite />} />
              {/* <Route path="/indradhanubranding" element={<IndradhanuBranding />} /> */}
              <Route path="/bicycleparking" element={<BicycleParking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Analytics />
      </Router>
    </ThemeProvider>
  );
}

export default App;
