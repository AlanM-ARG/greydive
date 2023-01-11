import "./App.css";
import { Route, Routes } from "react-router-dom";
import Client from "./components/Client";
import Form from "./components/Form";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/client" element={<Client />} />
    </Routes>
  );
};

export default App;
