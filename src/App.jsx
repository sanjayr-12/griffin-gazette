import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sub from "./pages/Sub";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<Sub />} />
      </Routes>
    </div>
  );
};

export default App;
