import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Help from "./pages/Help";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="statistics" element={<Reports />} />
      <Route path="help" element={<Help />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
