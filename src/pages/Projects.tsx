
import Layout from '../components/Layout';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded-sharp mb-4">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Recent Projects
            </h1>
            <div className="h-1 w-20 bg-highlight mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A showcase of my technical skills and entrepreneurial ventures, demonstrating expertise in Java, DevOps, and problem-solving.
            </p>
          </div>

          <div className="space-y-24">
            {/* Azure AKS Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1 lg:pr-6">
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Azure AKS Multi-Environment Deployment
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Infrastructure as Code implementation for deploying Azure Kubernetes Service clusters 
                  across multiple environments using Terraform and Azure DevOps pipelines. Completed in 2025.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Terraform</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Azure</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">Kubernetes</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">AKS</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">IaC</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">DevOps</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300 border border-transparent hover:border-accent">CI/CD</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Key Features</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Custom modules for reusable infrastructure components</li>
                    <li>Multi-AZ deployment for high availability</li>
                    <li>Node pool auto-scaling configuration</li>
                    <li>Azure-native network plugin integration</li>
                    <li>Remote state storage in Azure Storage</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://github.com/ashrafxbilal/azure-aks-terraform.git" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Github size={16} className="mr-2" /> View on GitHub
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-secondary/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300">
                <pre className="font-mono text-xs text-muted-foreground overflow-auto p-4 bg-background rounded-sharp border border-border h-96">
{`# main.tf - Azure AKS Terraform Configuration

module "aks_cluster" {
  source              = "./modules/aks"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  cluster_name        = "\${var.prefix}-aks-\${var.environment}"
  kubernetes_version  = var.kubernetes_version
  
  default_node_pool = {
    name                = "default"
    node_count          = var.node_count
    vm_size             = var.vm_size
    availability_zones  = ["1", "2", "3"]
    enable_auto_scaling = true
    min_count           = var.min_node_count
    max_count           = var.max_node_count
    os_disk_size_gb     = var.os_disk_size_gb
  }

  network_profile = {
    network_plugin    = "azure"
    load_balancer_sku = "standard"
    network_policy    = "calico"
  }
  
  identity_type = "SystemAssigned"
  
  tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
    Owner       = "DevOps"
  }
}`}
                </pre>
              </div>
            </div>

            {/* Moodify Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Moodify Firefox Extension
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  A Firefox extension that enhances browsing with intuitive color adjustments that adapt to content sentiment. Developed in 2025.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">JavaScript</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">CSS</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Firefox</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">WebExtension</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">UI/UX</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Features</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Mood-based color adaptation that adjusts website colors according to content sentiment</li>
                    <li>Customization options to fine-tune color intensity and contrast</li>
                    <li>Easy toggle functionality to quickly enable or disable the extension</li>
                    <li>Lightweight implementation with minimal performance impact</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://addons.mozilla.org/en-US/firefox/addon/moodify/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <ExternalLink size={16} className="mr-2" /> View on Firefox Add-ons
                  </a>
                </div>
              </div>
              <div className="bg-secondary/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg">
                <div className="bg-background rounded-sharp border border-border p-4 h-96 flex flex-col">
                  <div className="mb-4 p-2 bg-muted rounded-sharp border-b border-border flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono">Moodify Extension</div>
                  </div>
                  <div className="space-y-4 flex-grow">
                    <div className="p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">Mood Settings</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Calm</span>
                          <div className="w-4 h-4 rounded-full bg-blue-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Energetic</span>
                          <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Focused</span>
                          <div className="w-4 h-4 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Relaxed</span>
                          <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">Intensity</h4>
                      <div className="h-2 bg-background rounded-full">
                        <div className="h-2 w-3/4 bg-highlight rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-sharp">
                      <h4 className="text-sm font-bold mb-2">Contrast</h4>
                      <div className="h-2 bg-background rounded-full">
                        <div className="h-2 w-1/2 bg-highlight rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <button className="w-full py-2 bg-highlight hover:bg-highlight/90 text-black font-medium rounded-sharp text-sm transition">
                      Apply Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rowzah Project */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl font-mono font-bold mb-4 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                  <span className="text-highlight mr-2">#</span> Rowzah - Online Umrah Booking Platform
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  India's first online Umrah booking platform, leveraging technical insights to address a $20B market gap in religious tourism.
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">JavaScript</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">CSS</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">Firefox</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">WebExtension</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded-sharp hover:bg-accent hover:text-accent-foreground transition-colors duration-300">UI/UX</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-mono font-bold mb-3">Key Achievements</h3>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li>Built a scalable platform architecture from the ground up</li>
                    <li>Designed user-centric journey to optimize conversion rates</li>
                    <li>Implemented secure payment processing and booking management system</li>
                    <li>Developed comprehensive backend APIs for booking, user management, and inventory</li>
                    <li>Attracted 415 unique visitors, validating the platform's demand and usability</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://rowzah.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group btn-neo btn-neo-primary animate-boop inline-flex items-center px-4 py-2 bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-sharp hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <ExternalLink size={16} className="mr-2" /> Visit Website
                  </a>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center items-center bg-secondary/80 backdrop-blur-sm p-8 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-highlight/50 to-transparent rounded-sharp transform rotate-2"></div>
                  <div className="relative z-10 bg-card shadow-lg rounded-sharp p-8 border border-border">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold font-mono">Rowzah</h3>
                      <p className="text-xs text-muted-foreground">India's First Umrah Platform</p>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="p-3 bg-muted rounded-sharp">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Active Users</span>
                          <span className="text-xs font-mono">415</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-sharp">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Social Reach</span>
                          <span className="text-xs font-mono">80,000+</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Webinar Attendees</span>
                          <span className="text-xs font-mono">150</span>
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Market Size</span>
                          <span className="text-xs font-mono">$20B</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">
                      Founded 2024 • New Delhi, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="group btn-neo btn-neo-primary animate-boop"> {/* Applied Neo-Brutalist button style and boop animation */} 
              Get in Touch <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
