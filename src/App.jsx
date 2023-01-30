import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './HomePage';
import NavigationBar from './NavigationBar';
import ResearchPage from './ResearchPage';
import TeachingPage from './TeachingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
