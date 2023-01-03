import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CVPage from './CVPage';
import HomePage from "./HomePage";
import NavigationBar from "./NavigationBar";
import ResearchPage from "./ResearchPage";
import TeachingPage from "./TeachingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
