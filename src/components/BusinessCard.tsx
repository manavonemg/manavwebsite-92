import { useState } from "react";
import { Calendar, QrCode, Phone, Mail, MessageSquare, MessageCircle, Info, Image } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import QRModal from "./QRModal";

const BusinessCard = () => {
  const [showQR, setShowQR] = useState(false);

  const navigationItems = [
    [
      { title: "The Unscripted Credo", icon: <Info className="w-6 h-6" /> },
      { title: "The Unscripted Story", icon: <Info className="w-6 h-6" /> },
      { title: "The Unscripted Ethos", icon: <Info className="w-6 h-6" /> },
    ],
    [
      { title: "Inside My Mind", icon: <Info className="w-6 h-6" /> },
      { title: "The Unscripted Circle", icon: <Info className="w-6 h-6" /> },
      { title: "The Unscripted Frame", icon: <Info className="w-6 h-6" /> },
    ],
    [
      { title: "Direct Dial", icon: <Phone className="w-6 h-6" /> },
      { title: "Direct Inbox", icon: <Mail className="w-6 h-6" /> },
      { title: "Direct Text", icon: <MessageSquare className="w-6 h-6" /> },
    ],
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-figtree flex flex-col">
      <div className="flex-grow">
        <div className="relative">
          <div className="h-48 bg-gray-200 relative">
            <Image className="w-full h-full object-cover" />
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
            >
              <Calendar className="w-6 h-6 text-black" />
            </a>
            <button
              onClick={() => setShowQR(true)}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
            >
              <QrCode className="w-6 h-6 text-black" />
            </button>
          </div>
          
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-end">
            <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white shadow-lg">
              <Image className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="w-12 h-12 bg-gray-200 rounded-full border-2 border-white shadow-lg -ml-4">
              <Image className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-20 px-6">
          <h1 className="text-2xl font-semibold text-black text-center">Manav Aildasani</h1>
          <p className="text-center mt-1 text-black">
            Director of Brand Chaos @{" "}
            <a
              href="https://www.unscripted.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-80 transition-opacity"
            >
              Unscripted
            </a>
          </p>
          
          <p className="mt-4 text-black text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full mt-6 bg-black hover:bg-black/90 text-white">
                Exchange Contact
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share Contact Details</DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>

          <div className="mt-8 space-y-8 mb-16">
            {navigationItems.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-4">
                {row.map((item, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center space-y-2 group"
                  >
                    <div className="p-3 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs text-black text-center px-1">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full py-4 px-6 text-center text-sm text-black border-t">
        © 2025 Unscripted. All rights reserved. | Approved for Chaos.
      </footer>

      <QRModal open={showQR} onClose={() => setShowQR(false)} />
    </div>
  );
};

export default BusinessCard;