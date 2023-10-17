import HeroList from "./HeroList";
import UpDate from "./UpDate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import HeroDetail from "./HeroDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/HeroList" element={<HeroList />} />
          <Route path="/HeroDetail" element={<HeroDetail />}>
            <Route path=":id" element={<HeroDetail />} />
          </Route>
          <Route path="/UpDate" element={<UpDate />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
