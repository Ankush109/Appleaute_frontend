import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast, useToasterStore } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
function App() {
  let auttheticated = false;
  localStorage.getItem("token")
    ? (auttheticated = true)
    : (auttheticated = false);
  console.log(auttheticated);

  const MAX_TOAST_LIMIT = 2;
  const { toasts } = useToasterStore();
  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= MAX_TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts, auttheticated]);

  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={auttheticated ? <Home /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
