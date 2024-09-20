import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { SuccessPage } from "./components/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;