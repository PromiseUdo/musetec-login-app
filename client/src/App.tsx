import { RouterProvider } from "react-router-dom";
import RouteConfig from "./routes";
import "./App.css";
import { Toaster } from "sonner";
import { cn } from "./lib/utils";

function App() {
  return (
    <div
      className={cn("App", {
        "debug-screens": process.env.NODE_ENV === "development",
      })}
    >
      <Toaster position="top-center" richColors />
      <RouterProvider router={RouteConfig} />
    </div>
  );
}

export default App;
