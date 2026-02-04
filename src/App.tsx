import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
