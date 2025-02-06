
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface ContactFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  company: string;
  countryCode: string;
  number: string;
}

const INITIAL_FORM_STATE: FormData = {
  name: "",
  company: "",
  countryCode: "",
  number: "",
};

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Contact sent successfully!",
      description: "Your contact information has been shared.",
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
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
        <Label htmlFor="number">Phone Number</Label>
        <div className="flex gap-2">
          <Input
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-20"
            placeholder="CC"
          />
          <Input
            id="number"
            name="number"
            type="tel"
            required
            value={formData.number}
            onChange={handleChange}
            className="flex-1"
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
        Send Your Contact
      </Button>
    </form>
  );
};

export default ContactForm;
