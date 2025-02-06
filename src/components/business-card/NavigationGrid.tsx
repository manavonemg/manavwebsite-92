
import { Book, FilePenLine, Heart, Brain, Linkedin, Instagram, Phone, Mail, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NavigationItem {
  title: string;
  icon: JSX.Element;
  href?: string;
  dialog?: {
    title: string;
    content: string;
  };
}

const NavigationGrid = () => {
  const navigationItems: NavigationItem[][] = [
    [
      { title: "The Unscripted\nCredo", icon: <Book className="w-8 h-8" /> },
      { 
        title: "The Unscripted\nStory", 
        icon: <FilePenLine className="w-8 h-8" />,
        dialog: {
          title: "Why We Exist",
          content: "At Unscripted, we have come to terms with a simple truth: the old ways do not work anymore. The agency world has been stuck in its comfort zone for far too long, recycling the same ideas, playbooks, and tired promises. But let us face it: everything has changed. The way people connect, brands grow, and stories are told — it's all moving, and agencies need to move with it.\n\nThat's why Unscripted exists - to flip the script. We are not here to sell jargon or talk empty dreams. We are here to build something meaningful – an agency rooted in connections. Results. Impact. We dig deep to understand what keeps our clients up at night, what fuels the people on our team, and what audiences care about. We focus on what works and, more importantly, on what matters.\n\nBeing Unscripted is not just how we identify ourselves – it is how we show up. It is about asking uncomfortable questions, leading into the unknown, and staying adaptable when others play it safe. It is about working with heart, grit, and a belief that every brand deserves more than just 'good enough.' It is a commitment to honesty and clarity because that is what it takes to make a difference.\n\nWe are not just trying to reshape advertising; we want to change how agencies think and create. When we operate with clarity, lead with empathy, and refuse to compromise on what's right - we create work that moves brands and the people behind them.\n\nEvery problem, every story, and every solution is a chance to do things Unscripted. This is not the start of another agency — it's the start of something new.\n\nThis is Unscripted. Join us as we redefine what an agency can be."
        }
      },
      { 
        title: "The Unscripted\nEthos", 
        icon: <Heart className="w-8 h-8" />,
        dialog: {
          title: "Core Values",
          content: "At Unscripted, we have developed a set of values that reflect how we work, think, and connect. These are not just principles we throw around but the guiding light to all of our processes, internal or external. They keep us grounded and remind us why we choose this job daily. These values are the heartbeat of Unscripted, and they shape not just our work but the culture we are building together - one where growth, creativity, and progress never stop.\n\nSeek Discomfort.\n\nDiscomfort is the birthplace of growth. Embrace the uneasy, unfamiliar, and challenging — it is where magic happens.\n\nCreativity thrives on honesty.\n\nHonest conversations lead to honest work. Speak clearly, listen actively, and always tell the truth - even when it's uncomfortable.\n\nNo \"I\" in Unscripted.\n\nCollaboration is not optional but foundational. The best ideas come when everyone feels heard, respected, and invested.\n\nEmpathy is a superpower.\n\nUnderstanding others — clients, audiences, and colleagues — fuels better work. Before you make decisions, walk a mile in someone else's shoes.\n\nRespect the blank canvas.\n\nEverything starts with infinite possibilities. Please treat it with the respect it deserves by creating something truly original.\n\nDo work that matters.\n\nDo not create just for the sake of it. Everything should have a purpose, spark change, or solve a problem worth solving.\n\nClarity over chaos.\n\nIn a world filled with noise, simplicity wins. Prioritize focused thinking, clear communication, and getting to the point.\n\nLeave things better than you found them.\n\nWhether it is a project, a relationship, or the planet, aim to improve and elevate. Small actions create lasting impact.\n\nBe water, not stone.\n\nAdapt to challenges like water flowing around rocks. Stay flexible, open-minded, and ready to find new paths when old ones do not work.\n\nJust show up.\n\nConsistency beats perfection. Show up with intent, do your best, and commit to the process - even on the hard days.\n\nCelebrate progress.\n\nBig wins are great, but small victories matter too. Recognize growth, effort, and moments that lead to a breakthrough."
        }
      },
    ],
    [
      { 
        title: "Inside My\nMind", 
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
  );
};

export default NavigationGrid;
