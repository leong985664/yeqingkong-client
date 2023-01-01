import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "./HomePage";
import ResearchPage from "./ResearchPage";
import TeachingPage from "./TeachingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Research" element={<ResearchPage />} />
          <Route path="/Teaching" element={<TeachingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
