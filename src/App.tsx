
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Desktop from "./pages/Desktop";
import NotFound from "./pages/NotFound";
import { useIsMobile } from "./hooks/use-mobile";

const queryClient = new QueryClient();

// AutoRedirect component to handle automatic redirection based on device
const AutoRedirect = () => {
  const isMobile = useIsMobile();
  
  // If we can determine the device type, redirect accordingly
  if (isMobile !== undefined) {
    return <Navigate to={isMobile ? "/" : "/desktop"} replace />;
  }
  
  // Default to mobile view while detecting
  return <Index />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/detect" element={<AutoRedirect />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
