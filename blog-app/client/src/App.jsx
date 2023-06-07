import "./App.css";
import { useState, useContext, createContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Community from "./pages/Community";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ReactSwitch from "react-switch";
import UpdatePost from "./pages/UpdatePost";

export const UserContext = createContext();
// light theme / dark theme
export const ThemeContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  //light/dark theme
  const [theme, setTheme] = useState("light");
  //light/dark theme logic
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Navbar />
        <div className="switch">
          <label>{theme === "light" ? "Light mode" : "Dark mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Routes>
            <Route
              path="/community"
              element={user ? <Community /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/create-post"
              element={user ? <CreatePost /> : <Navigate to="/login" />}
            />

            <Route path="/" element={<Community />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/update-post" element={<UpdatePost />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>404 Not Found</h1>
                  <h2>
                    You have no bussiness in here, go somewhere else 🤬🤬 and
                    mind your own posts 😎💪
                  </h2>
                </div>
              }
            />
          </Routes>
        </UserContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
//err css -- needs css modules / keep css disabled(will mess react-quill)
