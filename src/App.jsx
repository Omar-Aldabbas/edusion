import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { CourseProvider } from "./context/CourseContext";

export const App = () => {
  return (
    <>
      <CourseProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route />
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </BrowserRouter>
      </CourseProvider>
    </>
  );
};
