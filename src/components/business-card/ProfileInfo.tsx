
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import ContactForm from "../ContactForm";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const ProfileInfo = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN;CHARSET=UTF-8:Manav Aildasani
N;CHARSET=UTF-8:Aildasani;Manav;;;
EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:manav@unscripted.agency
TEL;TYPE=CELL:+919962730398
TITLE;CHARSET=UTF-8:Director of Brand Chaos
ORG;CHARSET=UTF-8:Unscripted
URL;type=WORK;CHARSET=UTF-8:unscripted.agency
REV:2025-02-06T17:27:27.873Z
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Manav Unscripted.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Contact downloaded!",
      description: "You can now find Manav's contact in your address book.",
    });
  };

  return (
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

      <div className="flex gap-2 mt-6">
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 text-white px-4 py-2">
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
          onClick={downloadVCard}
          className="flex items-center gap-2"
        >
          <CircleUserRound className="w-4 h-4" />
          <span>Save Contact</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
