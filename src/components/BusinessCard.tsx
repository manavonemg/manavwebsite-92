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
      { 
        title: "The Unscripted\nStory", 
        icon: <FilePenLine className="w-8 h-8" />,
        dialog: {
          title: "Why We Exist",
          content: `At Unscripted, we have come to terms with a simple truth: the old ways do not work anymore. The agency world has been stuck in its comfort zone for far too long, recycling the same ideas, playbooks, and tired promises. But let us face it: everything has changed. The way people connect, brands grow, and stories are told — it's all moving, and agencies need to move with it.

That's why Unscripted exists - to flip the script. We are not here to sell jargon or talk empty dreams. We are here to build something meaningful – an agency rooted in connections. Results. Impact. We dig deep to understand what keeps our clients up at night, what fuels the people on our team, and what audiences care about. We focus on what works and, more importantly, on what matters.

Being Unscripted is not just how we identify ourselves – it is how we show up. It is about asking uncomfortable questions, leading into the unknown, and staying adaptable when others play it safe. It is about working with heart, grit, and a belief that every brand deserves more than just 'good enough.' It is a commitment to honesty and clarity because that is what it takes to make a difference.

We are not just trying to reshape advertising; we want to change how agencies think and create. When we operate with clarity, lead with empathy, and refuse to compromise on what's right - we create work that moves brands and the people behind them.

Every problem, every story, and every solution is a chance to do things Unscripted. This is not the start of another agency — it's the start of something new.

This is Unscripted. Join us as we redefine what an agency can be.`
        }
      },
      { 
        title: "The Unscripted\nEthos", 
        icon: <Heart className="w-8 h-8" />,
        dialog: {
          title: "Core Values",
          content: `At Unscripted, we have developed a set of values that reflect how we work, think, and connect. These are not just principles we throw around but the guiding light to all of our processes, internal or external. They keep us grounded and remind us why we choose this job daily. These values are the heartbeat of Unscripted, and they shape not just our work but the culture we are building together - one where growth, creativity, and progress never stop.

**Seek discomfort.**
Discomfort is the birthplace of growth. Embrace the uneasy, unfamiliar, and challenging — it is where magic happens.

**Creativity thrives on honesty.**
Honest conversations lead to honest work. Speak clearly, listen actively, and always tell the truth - even when it's uncomfortable.

**No "I" in Unscripted.**
Collaboration is not optional but foundational. The best ideas come when everyone feels heard, respected, and invested.

**Empathy is a superpower.**
Understanding others — clients, audiences, and colleagues — fuels better work. Before you make decisions, walk a mile in someone else's shoes.

**Respect the blank canvas.**
Everything starts with infinite possibilities. Please treat it with the respect it deserves by creating something truly original.

**Do work that matters.**
Do not create just for the sake of it. Everything should have a purpose, spark change, or solve a problem worth solving.

**Clarity over chaos.**
In a world filled with noise, simplicity wins. Prioritize focused thinking, clear communication, and getting to the point.

**Leave things better than you found them.**
Whether it is a project, a relationship, or the planet, aim to improve and elevate. Small actions create lasting impact.

**Be water, not stone.**
Adapt to challenges like water flowing around rocks. Stay flexible, open-minded, and ready to find new paths when old ones do not work.

**Just show up.**
Consistency beats perfection. Show up with intent, do your best, and commit to the process - even on the hard days.

**Celebrate progress.**
Big wins are great, but small victories matter too. Recognize growth, effort, and moments that lead to a breakthrough.`
        }
      },
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
          <div className="h-64 bg-gray-200 relative">
            <img src="/lovable-uploads/5e37618a-8972-4901-b057-93c44299fac7.png" alt="Cover" className="w-full h-full object-cover" />
            <a
              href="https://calendar.app.google/n3pZifaLXkDZdCKM6"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
            >
              <CalendarClock className="w-5 h-5 text-primary" />
            </a>
            <button
              onClick={() => setShowQR(true)}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
            >
              <ScanLine className="w-5 h-5 text-primary" />
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
                {row.map((item, index) => {
                  if (item.dialog) {
                    return (
                      <Dialog key={index}>
                        <DialogTrigger asChild>
                          <button className="flex flex-col items-center space-y-2 group w-full">
                            <div className="p-3 rounded-full bg-white group-hover:bg-gray-50 transition-colors duration-300">
                              {item.icon}
                            </div>
                            <span className="text-sm text-black text-center px-1 leading-tight whitespace-pre-line">
                              {item.title}
                            </span>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold">{item.dialog.title}</DialogTitle>
                          </DialogHeader>
                          <div className="mt-4 text-black whitespace-pre-line">
                            {item.dialog.content}
                          </div>
                        </DialogContent>
                      </Dialog>
                    );
                  }

                  return (
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
                  );
                })}
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
