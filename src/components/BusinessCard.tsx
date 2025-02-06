
import { useState } from "react";
import { CalendarClock, ScanLine, Phone, Mail, Send, Book, FilePenLine, Heart, Brain, Linkedin, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import QRModal from "./QRModal";

const BusinessCard = () => {
  const [showQR, setShowQR] = useState(false);

  const navigationItems = [
    [
      { title: "The Unscripted\nCredo", icon: <Book className="w-8 h-8" /> },
      { title: "The Unscripted\nStory", icon: <FilePenLine className="w-8 h-8" /> },
      { title: "The Unscripted\nEthos", icon: <Heart className="w-8 h-8" /> },
    ],
    [
      { 
        title: "Inside\nMy\nMind", 
        icon: <Brain className="w-8 h-8" />,
        href: "https://www.linkedin.com/in/manavaildasani"
      },
      { 
        title: "The Unscripted\nCircle", 
        icon: <Linkedin className="w-8 h-8" />,
        href: "https://www.linkedin.com/company/unscripted-agency"
      },
      { 
        title: "The Unscripted\nFrame", 
        icon: <Instagram className="w-8 h-8" />,
        href: "https://www.instagram.com/unscripted_agency"
      },
    ],
    [
      { 
        title: "Direct Dial", 
        icon: <Phone className="w-8 h-8" />,
        href: "tel:+919962730398"
      },
      { 
        title: "Direct Inbox", 
        icon: <Mail className="w-8 h-8" />,
        href: "mailto:manav@unscripted.agency"
      },
      { 
        title: "Direct Text", 
        icon: <Send className="w-8 h-8" />,
        href: "https://wa.me/919962730398"
      },
    ],
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen font-figtree flex flex-col">
      <div className="flex-grow">
        <div className="relative">
          <div className="h-48 sm:h-64 bg-gray-200 relative">
            <img src="/lovable-uploads/d67af518-811c-4d73-893e-f965f7db0425.png" alt="Cover" className="w-full h-full object-cover" />
            <a
              href="https://calendar.app.google/n3pZifaLXkDZdCKM6"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
            >
              <CalendarClock className="w-8 h-8 text-primary" />
            </a>
            <button
              onClick={() => setShowQR(true)}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
            >
              <ScanLine className="w-8 h-8 text-primary" />
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
              <img src="/lovable-uploads/0bf00432-c4f7-4f17-adf5-22312b84131c.png" alt="Secondary profile" className="w-full h-full object-cover" />
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
            Leading the chaos at Unscripted – Because your brand deserves more than just "good enough."
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">
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

          <div className="mt-8 mb-8 space-y-8">
            {navigationItems.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-4">
                {row.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-2 group"
                  >
                    <div className="p-3 rounded-full bg-white group-hover:bg-gray-50 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm text-black text-center px-1 leading-tight whitespace-pre-line">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
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
