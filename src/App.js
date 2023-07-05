import { Route, Routes } from "react-router";
import MainPage from "./pages";
import Layout from "./components/layout";
import Quiz1 from "./pages/quiz1";
import Quiz2 from "./pages/quiz2";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/quiz1"  element={<Quiz1 />} />
          <Route path="/quiz2" element={<Quiz2 />} />
        </Route>
      </Routes>
    </>
  );
}
