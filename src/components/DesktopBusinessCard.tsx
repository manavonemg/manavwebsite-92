
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { CircleUserRound, CalendarClock, ScanLine } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import QRModal from "./QRModal";

// Configuration object for easy customization
const CONFIG = {
  name: "Manav Aildasani",
  title: "Director of Brand Chaos",
  company: "Unscripted",
  website: "unscripted.agency",
  phone: "+919962730398",
  email: "manav@unscripted.agency",
  description: 'Leading the chaos at Unscripted – Because your brand deserves more than just "good enough."',
};

const DesktopBusinessCard = () => {
  const [showQR, setShowQR] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:${CONFIG.name}
N;CHARSET=UTF-8:${CONFIG.name.split(' ').reverse().join(';')};;;
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:${CONFIG.email}
TEL;TYPE=CELL:${CONFIG.phone}
TITLE;CHARSET=UTF-8:${CONFIG.title}
ORG;CHARSET=UTF-8:${CONFIG.company}
URL;type=WORK;CHARSET=UTF-8:${CONFIG.website}
REV:${new Date().toISOString()}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${CONFIG.name.replace(' ', '_')}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Contact downloaded!",
      description: `You can now find ${CONFIG.name}'s contact in your address book.`,
    });
  };

  // Desktop layout has two columns
  return (
    <div className="max-w-6xl mx-auto bg-white min-h-screen font-figtree flex flex-col">
      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Left column - Profile and Information */}
        <div className="lg:w-1/3 bg-customBg border-r">
          <div className="relative p-8 flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-48 h-48 bg-gray-200 rounded-full border-4 border-white shadow-lg overflow-hidden mb-6">
              <img 
                src="/lovable-uploads/a98207a1-3f6c-4f60-b4e7-3a0fc30182c0.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            
            <div className="absolute top-6 right-6 flex space-x-2">
              <a
                href="https://calendar.app.google/n3pZifaLXkDZdCKM6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
              >
                <CalendarClock className="w-5 h-5 text-primary" />
              </a>
              <button
                onClick={() => setShowQR(true)}
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
              >
                <ScanLine className="w-5 h-5 text-primary" />
              </button>
            </div>
            
            {/* Secondary profile badge */}
            <div className="absolute top-32 right-24 w-12 h-12 bg-gray-200 rounded-full border-2 border-white shadow-lg overflow-hidden">
              <img 
                src="/lovable-uploads/0bf00432-c4f7-4f17-adf5-22312b84131c.png" 
                alt="Secondary profile" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            
            {/* Name and title */}
            <h1 className="text-3xl font-semibold text-black text-center mt-2">{CONFIG.name}</h1>
            <p className="text-center mt-1 text-black text-lg">
              {CONFIG.title} @{" "}
              <a
                href={`https://www.${CONFIG.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:opacity-80 transition-opacity"
              >
                {CONFIG.company}
              </a>
            </p>
            
            <p className="mt-4 text-black text-center">
              {CONFIG.description}
            </p>

            <div className="flex gap-2 mt-6 w-full max-w-xs">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white flex-1">
                    Exchange Contact
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Share Contact Details</DialogTitle>
                  </DialogHeader>
                  <ContactForm onClose={() => setDialogOpen(false)} />
                </DialogContent>
              </Dialog>

              <Button 
                variant="outline" 
                size="icon"
                onClick={downloadVCard}
                className="w-10 h-10 rounded-full"
              >
                <CircleUserRound className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 w-full">
              <div className="space-y-4">
                <a 
                  href={`tel:${CONFIG.phone}`}
                  className="flex items-center space-x-3 p-3 hover:bg-white/60 rounded-lg transition-colors duration-300"
                >
                  <div className="p-2 bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Phone</div>
                    <div className="text-sm">{CONFIG.phone}</div>
                  </div>
                </a>
                
                <a 
                  href={`mailto:${CONFIG.email}`}
                  className="flex items-center space-x-3 p-3 hover:bg-white/60 rounded-lg transition-colors duration-300"
                >
                  <div className="p-2 bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Email</div>
                    <div className="text-sm">{CONFIG.email}</div>
                  </div>
                </a>
                
                <a 
                  href={`https://www.${CONFIG.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 hover:bg-white/60 rounded-lg transition-colors duration-300"
                >
                  <div className="p-2 bg-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Website</div>
                    <div className="text-sm">{CONFIG.website}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right column - Cover Image and Navigation */}
        <div className="lg:w-2/3">
          {/* Cover image */}
          <div className="h-64 bg-gray-200">
            <img 
              src="/lovable-uploads/fd49c558-5f5a-48dd-aba3-8b285febc428.png" 
              alt="Cover" 
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          {/* Navigation content */}
          <div className="p-8">
            <div className="grid grid-cols-3 gap-8">
              <DesktopNavItem 
                title="The Unscripted Credo" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>} 
              />
              <DesktopNavItem 
                title="The Unscripted Story" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-tool"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>}
                dialogTitle="Why We Exist"
                dialogContent="At Unscripted, we have come to terms with a simple truth: the old ways do not work anymore. The agency world has been stuck in its comfort zone for far too long, recycling the same ideas, playbooks, and tired promises. But let us face it: everything has changed. The way people connect, brands grow, and stories are told — it's all moving, and agencies need to move with it.\n\nThat's why Unscripted exists - to flip the script. We are not here to sell jargon or talk empty dreams. We are here to build something meaningful – an agency rooted in connections. Results. Impact. We dig deep to understand what keeps our clients up at night, what fuels the people on our team, and what audiences care about. We focus on what works and, more importantly, on what matters.\n\nBeing Unscripted is not just how we identify ourselves – it is how we show up. It is about asking uncomfortable questions, leading into the unknown, and staying adaptable when others play it safe. It is about working with heart, grit, and a belief that every brand deserves more than just 'good enough.' It is a commitment to honesty and clarity because that is what it takes to make a difference.\n\nWe are not just trying to reshape advertising; we want to change how agencies think and create. When we operate with clarity, lead with empathy, and refuse to compromise on what's right - we create work that moves brands and the people behind them.\n\nEvery problem, every story, and every solution is a chance to do things Unscripted. This is not the start of another agency — it's the start of something new.\n\nThis is Unscripted. Join us as we redefine what an agency can be."
              />
              <DesktopNavItem 
                title="The Unscripted Ethos" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>}
                dialogTitle="Core Values"
                dialogContent="At Unscripted, we have developed a set of values that reflect how we work, think, and connect. These are not just principles we throw around but the guiding light to all of our processes, internal or external. They keep us grounded and remind us why we choose this job daily. These values are the heartbeat of Unscripted, and they shape not just our work but the culture we are building together - one where growth, creativity, and progress never stop.\n\nSeek Discomfort.\n\nDiscomfort is the birthplace of growth. Embrace the uneasy, unfamiliar, and challenging — it is where magic happens.\n\nCreativity thrives on honesty.\n\nHonest conversations lead to honest work. Speak clearly, listen actively, and always tell the truth - even when it's uncomfortable.\n\nNo \"I\" in Unscripted.\n\nCollaboration is not optional but foundational. The best ideas come when everyone feels heard, respected, and invested.\n\nEmpathy is a superpower.\n\nUnderstanding others — clients, audiences, and colleagues — fuels better work. Before you make decisions, walk a mile in someone else's shoes.\n\nRespect the blank canvas.\n\nEverything starts with infinite possibilities. Please treat it with the respect it deserves by creating something truly original.\n\nDo work that matters.\n\nDo not create just for the sake of it. Everything should have a purpose, spark change, or solve a problem worth solving.\n\nClarity over chaos.\n\nIn a world filled with noise, simplicity wins. Prioritize focused thinking, clear communication, and getting to the point.\n\nLeave things better than you found them.\n\nWhether it is a project, a relationship, or the planet, aim to improve and elevate. Small actions create lasting impact.\n\nBe water, not stone.\n\nAdapt to challenges like water flowing around rocks. Stay flexible, open-minded, and ready to find new paths when old ones do not work.\n\nJust show up.\n\nConsistency beats perfection. Show up with intent, do your best, and commit to the process - even on the hard days.\n\nCelebrate progress.\n\nBig wins are great, but small victories matter too. Recognize growth, effort, and moments that lead to a breakthrough."
              />
              <DesktopNavItem 
                title="Inside My Mind" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>}
                href="https://www.linkedin.com/in/manavaildasani"
              />
              <DesktopNavItem 
                title="The Unscripted Circle" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                href="https://www.linkedin.com/company/unscripted-agency"
              />
              <DesktopNavItem 
                title="The Unscripted Frame" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>}
                href="https://www.instagram.com/unscripted_agency"
              />
              <DesktopNavItem 
                title="Direct Dial" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>}
                href="tel:+919962730398"
              />
              <DesktopNavItem 
                title="Direct Inbox" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>}
                href="mailto:manav@unscripted.agency"
              />
              <DesktopNavItem 
                title="Direct Text" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>}
                href="https://wa.me/919962730398"
              />
            </div>
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

// Helper component for navigation items
interface DesktopNavItemProps {
  title: string;
  icon: JSX.Element;
  href?: string;
  dialogTitle?: string;
  dialogContent?: string;
}

const DesktopNavItem = ({ title, icon, href, dialogTitle, dialogContent }: DesktopNavItemProps) => {
  if (dialogTitle && dialogContent) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex flex-col items-center p-6 space-y-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-4 rounded-full bg-customBg">
              {icon}
            </div>
            <span className="text-base font-medium text-gray-800 text-center">
              {title}
            </span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{dialogTitle}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 text-black whitespace-pre-line">
            {dialogContent}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center p-6 space-y-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="p-4 rounded-full bg-customBg">
        {icon}
      </div>
      <span className="text-base font-medium text-gray-800 text-center">
        {title}
      </span>
    </a>
  );
};

export default DesktopBusinessCard;
