
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "../ContactForm";

const ProfileInfo = () => {
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
    </div>
  );
};

export default ProfileInfo;

