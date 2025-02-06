
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface QRModalProps {
  open: boolean;
  onClose: () => void;
}

const QRModal = ({ open, onClose }: QRModalProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Manav Aildasani's Digital Card",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <img 
              src="/lovable-uploads/141add4f-7e91-42fa-8662-b48791f1d249.png" 
              alt="QR Code"
              className="w-48 h-48 object-contain" 
            />
          </div>
          
          <Button
            variant="outline"
            className="flex items-center space-x-2 h-auto py-3"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRModal;

