
import { CalendarClock, ScanLine } from "lucide-react";

interface ProfileHeaderProps {
  onOpenQR: () => void;
}

const ProfileHeader = ({ onOpenQR }: ProfileHeaderProps) => {
  return (
    <div className="relative">
      <div className="h-64 bg-gray-200 relative">
        <img 
          src="/lovable-uploads/d34233db-1103-4980-a125-e97101b3fcb3.png" 
          alt="Cover" 
          className="w-full h-full object-cover object-center" 
        />
        <a
          href="https://calendar.app.google/n3pZifaLXkDZdCKM6"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
        >
          <CalendarClock className="w-6 h-6 text-primary" />
        </a>
        <button
          onClick={onOpenQR}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
        >
          <ScanLine className="w-6 h-6 text-primary" />
        </button>
      </div>
      
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-end">
        <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white shadow-lg overflow-hidden">
          <img 
            src="/lovable-uploads/a98207a1-3f6c-4f60-b4e7-3a0fc30182c0.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white shadow-lg -ml-4 overflow-hidden">
          <img 
            src="/lovable-uploads/0bf00432-c4f7-4f17-adf5-22312b84131c.png" 
            alt="Secondary profile" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
