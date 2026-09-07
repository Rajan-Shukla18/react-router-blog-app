import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PostDetail = lazy(() => import("./pages/PostDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

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
          <Suspense
            fallback={
              <div className="mx-auto max-w-article px-6 py-12">
               <div
               className="animate-pulse"
               role="status"
               aria-label="Loading page"
               >
               <div className="mb-5 h-3 w-20 rounded bg-stone-200" />

               <div className="mb-4 h-10 w-4/5 rounded bg-stone-200" />

               <div className="mb-8 h-4 w-32 rounded bg-stone-200" />

               <div className="mb-8 aspect-video w-full rounded-2xl bg-stone-200" />

              <div className="space-y-4">
                <div className="h-4 w-full rounded bg-stone-200" />
                <div className="h-4 w-full rounded bg-stone-200" />
                <div className="h-4 w-5/6 rounded bg-stone-200" />
            </div>
          </div>
        </div>
      }
    >
            <AnimatedRoutes routes={routes} />
         </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;