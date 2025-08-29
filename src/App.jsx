import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { CourseProvider } from "./context/CourseContext";
import { Footer } from "./components/Footer";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { CoursesPage } from "./pages/CoursesPage";

export const App = () => {
  return (
    <>
      <CourseProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/courses" element={<CoursesPage/>} />
            <Route />
            <Route />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CourseProvider>
    </>
  );
};
