
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import ContactForm from "../ContactForm";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

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

const ProfileInfo = () => {
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

  return (
    <div className="mt-20 px-6">
      <h1 className="text-2xl font-semibold text-black text-center">{CONFIG.name}</h1>
      <p className="text-center mt-1 text-black">
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

      <div className="flex gap-2 mt-6">
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
    </div>
  );
};

export default ProfileInfo;
