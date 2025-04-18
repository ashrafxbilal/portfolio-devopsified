import { useState } from 'react';
import Layout from '@/components/Layout';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      toast({
        title: "Message sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
              Get in Touch
            </h1>
            <div className="h-1 w-20 bg-highlight mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Have a question or want to work together? Feel free to reach out using the form below or through my social media channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-highlight"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-highlight"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-highlight"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-highlight"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-mono font-bold mb-6 flex items-center">
                <span className="text-highlight mr-2">#</span> Contact Information
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-mono font-bold mb-3">Location</h3>
                  <p className="text-muted-foreground">New Delhi, India</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-mono font-bold mb-3">Email</h3>
                  <a 
                    href="mailto:beingbilalashraf@gmail.com" 
                    className="text-muted-foreground hover:text-foreground transition inline-flex items-center"
                  >
                    <Mail size={16} className="mr-2" /> beingbilalashraf@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-mono font-bold mb-3">Phone</h3>
                  <p className="text-muted-foreground">+91-8287560300</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-mono font-bold mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/ashrafxbilal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-3 border border-muted rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition flex items-center justify-center"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/bilalashraf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-3 border border-muted rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition flex items-center justify-center"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 border border-muted rounded-lg bg-background mt-8">
                  <p className="text-sm text-muted-foreground italic">
                    "I'm currently exploring opportunities in DevOps and cloud infrastructure. 
                    If you're looking for someone with a unique blend of Java development and 
                    entrepreneurial experience, I'd love to connect!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
