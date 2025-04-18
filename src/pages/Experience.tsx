import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded-sharp mb-4">
              Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
              Work & Entrepreneurial Experience
            </h1>
            <div className="h-1 w-20 bg-highlight mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A journey from Java development to entrepreneurship and DevOps, showcasing technical expertise and business acumen.
            </p>
          </div>

          <div className="space-y-16">
            {/* Professional Experience */}
            <div>
              <h2 className="text-2xl font-mono font-bold mb-8 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                <span className="text-highlight mr-2">#</span> Professional Experience
              </h2>
              
              <div className="space-y-12">
                {/* Magic EdTech Senior Role */}
                <div className="relative border-l-2 border-muted pl-8 pb-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-sharp bg-background border-2 border-highlight"></div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold">Senior Associate Software Engineer</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Magic EdTech, Noida, India</span>
                        <span className="mx-2">•</span>
                        <span>Apr 2023 - Jan 2024</span>
                      </div>
                    </div>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-base">
                      <li>Evaluated Micronaut as an alternative framework to Spring, achieving a remarkable 30% reduction in application startup time and a 22% decrease in memory consumption through the implementation of Ahead-of-Time (AOT) Compilation and minimizing the use of reflection.</li>
                      <li>Worked with COO to understand areas for workflow enhancement, leading to efficiency gains through automation.</li>
                      <li>Oversaw Frontend, Dev-Ops teams, and cross-functional units to ensure thorough comprehension of project requirements.</li>
                      <li>Took charge of production alerts and served as the point of contact for infrastructure incidents, maintaining 90% resolution rate within established response times.</li>
                      <li>Approved architectural decisions concerning application development and the formulation of scalable, dependable system solutions.</li>
                      <li>Attained an outstanding performance rating of 'Exceeding Expectation (4.5/5)' and earned a well-deserved promotion in recognition of successfully delivering the Deal Pricing App within a year.</li>
                    </ul>
                  </div>
                </div>

                {/* Magic EdTech Associate Role */}
                <div className="relative border-l-2 border-muted pl-8 pb-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-sharp bg-background border-2 border-muted"></div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold">Associate Software Engineer</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Magic EdTech, Noida, India</span>
                        <span className="mx-2">•</span>
                        <span>Jul 2022 - Mar 2023</span>
                      </div>
                    </div>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-base">
                      <li>Spearheaded the creation of Deal Pricing and its architecture from the ground up within my first year—a transformative B2B platform that empowered senior executives to oversee deals and monitor performance.</li>
                      <li>Developed a diverse suite of REST APIs for the platform, encompassing critical functions such as CSV file parsing, SMTP email server integration, dynamic backend rate card calculations, versioning, history management, in addition to data modeling and bug fixes. These APIs collectively lead to a reduction in manual data handling and improvement in system stability.</li>
                      <li>Prepared comprehensive documentation of the Spring upgrade process of the recent versions for the organization's Java community, demonstrating willingness to share expertise and help others grow.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrepreneurial Experience */}
            <div>
              <h2 className="text-2xl font-mono font-bold mb-8 flex items-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                <span className="text-highlight mr-2">#</span> Entrepreneurial Experience
              </h2>
              
              <div className="space-y-12">
                {/* Rowzah */}
                <div className="relative border-l-2 border-muted pl-8 pb-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-sharp bg-background border-2 border-highlight"></div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold">Founder and Sole Creator</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>Rowzah, Roorkee, India</span>
                        <span className="mx-2">•</span>
                        <span>May 2024 - 2025</span>
                      </div>
                    </div>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-base">
                      <li>Identified a $20B market gap in religious tourism to build India's first Umrah platform using system architecture principles.</li>
                      <li>Designed the platform's user journey ensuring scalability and user-centricity.</li>
                      <li>Grew Instagram presence to 150+ followers and reached approximately 80,000 accounts through curated reels.</li>
                      <li>Hosted a 150-attendee webinar to educate users on Rowzah's value proposition, enhancing trust and market penetration.</li>
                      <li>Attracted 415 unique visitors, validating the platform's demand and usability.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/projects" className="group btn-neo btn-neo-primary animate-boop">
              View My Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-mono font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">Education</h2>
            <div className="h-1 w-20 bg-highlight mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300 hover:shadow-highlight/20 card-hover">
              <h3 className="text-xl font-mono font-bold mb-2">B.Tech. Information Technology</h3>
              <p className="text-sm text-muted-foreground mb-1">Jamia Hamdard, India</p>
              <p className="text-sm text-muted-foreground mb-4">2018 – 2022</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>GPA: 7.55 / 10</li>
                <li>Head of Design at IEEE and CSI college societies</li>
              </ul>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-sharp shadow-lg border border-border hover:border-highlight transition-all duration-300 hover:shadow-highlight/20 card-hover">
              <h3 className="text-xl font-mono font-bold mb-2">High School Diploma</h3>
              <p className="text-sm text-muted-foreground mb-1">Vishwa Bharati Public School, India</p>
              <p className="text-sm text-muted-foreground mb-4">Graduated 2017</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Class 12th Percentage (CBSE): 89.2%</li>
                <li>Class 10th CGPA (CBSE): 9.2 / 10</li>
                <li>Elected as the Head Boy of the school in 12th grade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;