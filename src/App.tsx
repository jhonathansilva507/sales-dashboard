import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Login/>}/>
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
