import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QrCode, Share2, MessageCircle, MessageSquare } from "lucide-react";

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

  const shareButtons = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      onClick: () => {
        window.open(
          `whatsapp://send?text=${encodeURIComponent(window.location.href)}`,
          "_blank"
        );
      },
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "SMS",
      onClick: () => {
        window.open(`sms:?body=${encodeURIComponent(window.location.href)}`);
      },
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      label: "More",
      onClick: handleShare,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <QrCode className="w-48 h-48" />
          </div>
          
          <div className="w-full grid grid-cols-3 gap-4">
            {shareButtons.map((button, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center space-y-1 h-auto py-3"
                onClick={button.onClick}
              >
                {button.icon}
                <span className="text-xs">{button.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QRModal;