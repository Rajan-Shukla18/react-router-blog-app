import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/post/:id", element: <PostDetail /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-bg text-text">
        <Navbar />

        <main className="flex-1 px-2 py-4 md:px-8 md:py-10">
         <AnimatedRoutes routes={routes} />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;