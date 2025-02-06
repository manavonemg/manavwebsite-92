
import { useState } from "react";
import ProfileHeader from "./business-card/ProfileHeader";
import ProfileInfo from "./business-card/ProfileInfo";
import NavigationGrid from "./business-card/NavigationGrid";
import QRModal from "./QRModal";

const BusinessCard = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-figtree flex flex-col">
      <div className="flex-grow">
        <ProfileHeader onOpenQR={() => setShowQR(true)} />
        <ProfileInfo />
        <NavigationGrid />
      </div>

      <footer className="w-full py-4 px-6 text-center text-sm text-black border-t bg-white">
        <div>© 2025 Unscripted | All Rights Reserved</div>
        <div>Approved For Chaos :)</div>
      </footer>

      <QRModal open={showQR} onClose={() => setShowQR(false)} />
    </div>
  );
};

export default BusinessCard;

