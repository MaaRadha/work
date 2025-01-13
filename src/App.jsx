import { Suspense } from "react";
import { CircleLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import GuestBook from "./pages/GuestBook";

function App() {
  return (
    <Suspense fallback={<CircleLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="Prosjekter" element={<Projects />} />
          <Route path="Gjester" element={<GuestBook />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
