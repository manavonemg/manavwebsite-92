
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ConfigData {
  coverImage: string;
  primaryProfile: string;
  secondaryProfile: string;
  metaTitle: string;
  qrCode: string;
  qrShareMessage: string;
  name: string;
  title: string;
  company: string;
  website: string;
  phone: string;
  email: string;
  description: string;
  calendarLink: string;
  linkedinPersonal: string;
  linkedinCompany: string;
  instagram: string;
}

const Admin = () => {
  const [config, setConfig] = useState<ConfigData>({
    coverImage: "",
    primaryProfile: "",
    secondaryProfile: "",
    metaTitle: "",
    qrCode: "",
    qrShareMessage: "",
    name: "",
    title: "",
    company: "",
    website: "",
    phone: "",
    email: "",
    description: "",
    calendarLink: "",
    linkedinPersonal: "",
    linkedinCompany: "",
    instagram: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateZip = async () => {
    try {
      // Create a configuration file content
      const configContent = `
export const CONFIG = {
  name: "${config.name}",
  title: "${config.title}",
  company: "${config.company}",
  website: "${config.website}",
  phone: "${config.phone}",
  email: "${config.email}",
  description: "${config.description}",
  coverImage: "${config.coverImage}",
  primaryProfile: "${config.primaryProfile}",
  secondaryProfile: "${config.secondaryProfile}",
  metaTitle: "${config.metaTitle}",
  qrCode: "${config.qrCode}",
  qrShareMessage: "${config.qrShareMessage}",
  calendarLink: "${config.calendarLink}",
  linkedinPersonal: "${config.linkedinPersonal}",
  linkedinCompany: "${config.linkedinCompany}",
  instagram: "${config.instagram}",
};`;

      // Create a Blob containing the configuration
      const blob = new Blob([configContent], { type: 'application/javascript' });
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'config.ts';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Configuration downloaded!",
        description: "Your custom configuration file has been downloaded.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate configuration file.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Business Card Configuration</h1>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="metaTitle">Meta Title</Label>
          <Input
            id="metaTitle"
            name="metaTitle"
            value={config.metaTitle}
            onChange={handleInputChange}
            placeholder="e.g., John's Digital Card"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={config.name}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={config.title}
            onChange={handleInputChange}
            placeholder="Job Title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={config.company}
            onChange={handleInputChange}
            placeholder="Company Name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            value={config.website}
            onChange={handleInputChange}
            placeholder="company.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={config.description}
            onChange={handleInputChange}
            placeholder="Brief description or tagline"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={config.phone}
            onChange={handleInputChange}
            placeholder="+1234567890"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={config.email}
            onChange={handleInputChange}
            placeholder="email@company.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverImage">Cover Image URL</Label>
          <Input
            id="coverImage"
            name="coverImage"
            value={config.coverImage}
            onChange={handleInputChange}
            placeholder="https://example.com/cover.jpg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="primaryProfile">Primary Profile Image URL</Label>
          <Input
            id="primaryProfile"
            name="primaryProfile"
            value={config.primaryProfile}
            onChange={handleInputChange}
            placeholder="https://example.com/profile.jpg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="secondaryProfile">Secondary Profile Image URL</Label>
          <Input
            id="secondaryProfile"
            name="secondaryProfile"
            value={config.secondaryProfile}
            onChange={handleInputChange}
            placeholder="https://example.com/secondary.jpg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="qrCode">QR Code Image URL</Label>
          <Input
            id="qrCode"
            name="qrCode"
            value={config.qrCode}
            onChange={handleInputChange}
            placeholder="https://example.com/qr.png"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="qrShareMessage">QR Share Message</Label>
          <Input
            id="qrShareMessage"
            name="qrShareMessage"
            value={config.qrShareMessage}
            onChange={handleInputChange}
            placeholder="Scan to connect with me"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="calendarLink">Calendar Link</Label>
          <Input
            id="calendarLink"
            name="calendarLink"
            value={config.calendarLink}
            onChange={handleInputChange}
            placeholder="https://calendar.app.google/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinPersonal">Personal LinkedIn URL</Label>
          <Input
            id="linkedinPersonal"
            name="linkedinPersonal"
            value={config.linkedinPersonal}
            onChange={handleInputChange}
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinCompany">Company LinkedIn URL</Label>
          <Input
            id="linkedinCompany"
            name="linkedinCompany"
            value={config.linkedinCompany}
            onChange={handleInputChange}
            placeholder="https://linkedin.com/company/..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="instagram">Instagram URL</Label>
          <Input
            id="instagram"
            name="instagram"
            value={config.instagram}
            onChange={handleInputChange}
            placeholder="https://instagram.com/..."
          />
        </div>

        <Button 
          onClick={generateZip}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Download Configuration
        </Button>
      </div>
    </div>
  );
};

export default Admin;
