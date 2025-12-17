import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Brain, 
  Database, 
  Terminal,
  Download,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

// Assets
import profileImage from "@assets/WhatsApp_Image_2025-12-17_at_11.50.57_AM_1765952486911.jpeg";
import resumeFile from "@assets/Vvvinay_1765953014592.pdf";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-heading font-bold text-primary">VVV.</span>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
          </div>
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} variant="default" size="sm" className="rounded-full">
              Contact Me
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left text-xl font-bold text-primary">VVV.</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 text-lg font-medium">
                  <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">About</button>
                  <button onClick={() => scrollToSection('experience')} className="text-left hover:text-primary transition-colors">Experience</button>
                  <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">Projects</button>
                  <button onClick={() => scrollToSection('skills')} className="text-left hover:text-primary transition-colors">Skills</button>
                  <Button onClick={() => scrollToSection('contact')} variant="default" size="lg" className="rounded-full w-full mt-4">
                    Contact Me
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-6"
          >
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold font-heading leading-tight">
              Hi, I'm <span className="text-primary">Vinay</span>.<br />
              Gen AI Engineer.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build intelligent systems using LLMs, AI Agents, and modern web technologies. 
              Passionate about turning complex data into actionable insights through Generative AI.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="rounded-full px-8">
                Let's Talk
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 gap-2" asChild>
                <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" /> Resume
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-6 pt-8 text-muted-foreground">
              <a href="https://github.com/venkatavinayvijjapu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/venkatavinay" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:venkatavinayvijjapu@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-6 transform scale-95 blur-3xl" />
            <div className="relative aspect-[4/5] md:aspect-square w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
              <img 
                src={profileImage} 
                alt="Venkata Vinay Vijjapu" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold font-heading mb-4">Work Experience</h2>
            <Separator className="w-20 bg-primary h-1 rounded-full" />
          </motion.div>

          <div className="space-y-8 max-w-3xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="md:border-l-2 md:border-border md:pl-8 pb-8 last:pb-0 last:border-0">
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                        <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                      </div>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company} &bull; {exp.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-heading mb-4">Featured Projects</h2>
          <Separator className="w-20 bg-primary h-1 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:border-primary/50 transition-colors group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {project.icon}
                    </div>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold font-heading mb-4">Technical Expertise</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable AI solutions and full-stack applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 rounded-2xl p-6 backdrop-blur-sm border border-primary-foreground/10"
              >
                <h3 className="text-lg font-bold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary-foreground/10 rounded-md text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-lg border border-border overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-muted/50">
              <h2 className="text-3xl font-bold font-heading mb-6">Let's Work Together</h2>
              <p className="text-muted-foreground mb-8">
                I'm currently open for freelance projects and new opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:venkatavinayvijjapu@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-background">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium">venkatavinayvijjapu@gmail.com</span>
                </a>
                <a href="https://linkedin.com/venkatavinay" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-background">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="font-medium">linkedin.com/venkatavinay</span>
                </a>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" type="email" className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="How can I help you?" />
                </div>
                <Button type="submit" className="w-full rounded-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Venkata Vinay Vijjapu. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Data
const experiences = [
  {
    role: "Gen AI Engineer",
    company: "Deloitte",
    location: "Hyderabad",
    period: "Sept 2025 - Present",
    description: "Gen AI engineer specializing in LLMs and AI agents."
  },
  {
    role: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad",
    period: "Nov 2024 - Sept 2025",
    description: "Trained on Google Cloud Platform (GCP) and Hadoop concepts, along with Python and SQL development."
  },
  {
    role: "Data Science Intern",
    company: "Future Smart AI",
    location: "Remote",
    period: "Feb 2024 - May 2024",
    description: "Developed AI agents to retrieve conversations from LinkedIn and Gmail. Built chatbots connecting to databases using Natural Language to SQL generation."
  },
  {
    role: "AI Developer Intern",
    company: "Teckybot",
    location: "Visakhapatnam",
    period: "Nov 2023 - Feb 2024",
    description: "Developed AI projects for their LMS platform, creating educational content covering easy, medium, and hard difficulty levels."
  },
  {
    role: "AI Intern",
    company: "Neuraza AI",
    location: "Remote",
    period: "July 2023 - Aug 2023",
    description: "Built a Document Q&A system using LayoutLMv3 for question and answering on documents."
  }
];

const projects = [
  {
    title: "Video Analysis & QA System",
    description: "A video analysis system with Q&A capabilities using Large Language Models. Users can upload videos and ask questions to get AI-powered answers.",
    tech: ["Python", "Streamlit", "LLM"],
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Multi-AI Agent System",
    description: "Built a multi-agent system where autonomous agents interpret user queries and select appropriate tools with a 95% success rate. Leveraged Langchain, Groq, and Vector Databases.",
    tech: ["LangChain", "FastAPI", "Python", "RAG"],
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Blog AI Generator",
    description: "Automated blog writing by 85% using CrewAI. Converts user queries into structured, fact-checked articles with high relevancy using Gemini models.",
    tech: ["CrewAI", "Gemini", "Python", "Prompt Eng"],
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: "Natural Language to SQL Bot",
    description: "A natural language interface for databases enabling staff to retrieve data without writing SQL code. Powered by GPT-4 and LangSmith.",
    tech: ["GPT-4", "LangSmith", "SQL", "JSON"],
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Human-Tone Translator",
    description: "Voice-cloning translator that mimics the speaker’s tone and cadence using OpenAI Whisper, Google Translate, and Coqui-TTS.",
    tech: ["OpenAI Whisper", "Coqui-TTS", "Python"],
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "URL Spam Detection",
    description: "Trained a Naive Bayes model on 100k+ URL records using TF-IDF vectorizer, achieving 94% accuracy. Secured 3rd place in Deep Datathon 2.0.",
    tech: ["Python", "NLP", "Machine Learning"],
    icon: <Terminal className="w-6 h-6" />
  },
  {
    title: "AI Institute Ranker",
    description: "Tool to rank colleges based on AISCHE data using unstructured data processing with Python scripting and API handling.",
    tech: ["Python", "API", "JSON", "Web Scripting"],
    icon: <Code2 className="w-6 h-6" />
  }
];

const skills = {
  languages: ["Python", "C", "C++", "SQL", "MySQL"],
  frameworks: ["LangChain", "LlamaIndex", "LangGraph", "Flask", "FastAPI", "Streamlit"],
  genAI: ["RAG Pipeline", "Prompt Engineering", "AI Agents", "Agentic AI", "RLHF"],
  models: ["GPT-4", "Gemini", "Llama", "Mistral", "Gemma", "DALL-E-2"],
  tools: ["Google Cloud Platform", "Git", "Docker", "VS Code"]
};
