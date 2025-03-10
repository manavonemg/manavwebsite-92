
import { useEffect } from "react";
import DesktopBusinessCard from "@/components/DesktopBusinessCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

const Desktop = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // If on mobile, redirect to mobile version
  useEffect(() => {
    if (isMobile) {
      navigate("/");
    }
  }, [isMobile, navigate]);

  return <DesktopBusinessCard />;
};

export default Desktop;
