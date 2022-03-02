import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Administrator from "./pages/administrator/administrator";
import AdministratorCreate from "./pages/administrator/create";
import EvaluatorCreate from "./pages/evaluator/create";

// context
import RegisterContextProvider from "./contexts/registerContext";
import LoginContextProvider from "./contexts/loginContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <LoginContextProvider>
          <RegisterContextProvider>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/administrator" element={<Administrator />} />
              <Route
                exact
                path="/administrator/create"
                element={<AdministratorCreate />}
              />
              <Route
                exact
                path="/evaluator/create"
                element={<EvaluatorCreate />}
              />
            </Routes>
          </RegisterContextProvider>
        </LoginContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
