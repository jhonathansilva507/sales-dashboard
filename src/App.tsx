import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
