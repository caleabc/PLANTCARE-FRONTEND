import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Administrator from "./pages/administrator/administrator";
import AdministratorCreate from "./pages/administrator/create";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/administrator" element={<Administrator />} />
          <Route
            exact
            path="/administrator/create"
            element={<AdministratorCreate />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
