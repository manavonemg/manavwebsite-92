
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    number: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Contact sent successfully!",
      description: "Your contact information has been shared.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    link.setAttribute('download', 'Manav Aildasani.vcf');
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          name="number"
          type="tel"
          required
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
          Send Your Contact
        </Button>
        <Button 
          type="button" 
          variant="outline"
          onClick={downloadVCard}
          className="w-full"
        >
          Save My Contact
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
