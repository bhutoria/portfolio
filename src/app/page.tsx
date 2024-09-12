import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Experience,
  EXPERIENCE,
  LANGUAGES,
  NAME,
  PROFILE_PHOTO,
  ROLE,
  SOCIALS,
  TECHNOLOGIES,
  PROJECTS,
  Project,
} from "@/lib/constants";
import { Github, Linkedin, Briefcase, FolderGit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define types for props
type SectionTitleProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
};

type SkillCategoryProps = {
  title: string;
  skills: string[];
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

const ResumePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 p-6 md:p-12 relative overflow-x-hidden select-none h-screen overflow-y-auto">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Content */}
      <main className="max-w-5xl mx-auto relative z-10">
        <Header />
        <div className="grid md:grid-cols-[2fr,1fr] gap-12">
          <MainContent />
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

const Header: React.FC = () => (
  <header className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        {NAME}
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 font-light">{ROLE}</p>
    </div>
    <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-500 ring-opacity-50">
      <Image
        src={PROFILE_PHOTO}
        alt={NAME}
        width={200}
        height={200}
        className="object-contain w-full h-full"
      />
    </div>
  </header>
);

const MainContent: React.FC = () => (
  <section className="space-y-12">
    <ExperienceSection />
    <ProjectsSection />
  </section>
);

const ExperienceSection: React.FC = () => (
  <div>
    <SectionTitle icon={<Briefcase className="w-6 h-6" />}>
      Experience
    </SectionTitle>
    <Accordion type="single" collapsible className="space-y-6">
      {EXPERIENCE.map((job) => (
        <JobAccordionItem key={job.company} {...job} />
      ))}
    </Accordion>
  </div>
);

const ProjectsSection: React.FC = () => (
  <div>
    <SectionTitle icon={<FolderGit2 className="w-6 h-6" />}>
      Projects
    </SectionTitle>
    <Accordion type="single" collapsible className="space-y-6">
      {PROJECTS.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </Accordion>
  </div>
);

const Sidebar: React.FC = () => (
  <section className="space-y-12">
    <SkillsSection />
    <LinksSection />
  </section>
);

const SkillsSection: React.FC = () => (
  <div className="space-y-8">
    <SectionTitle>Skills</SectionTitle>
    <SkillCategory title="Languages" skills={LANGUAGES} />
    <SkillCategory title="Technologies" skills={TECHNOLOGIES} />
  </div>
);

const LinksSection: React.FC = () => (
  <div>
    <SectionTitle>Links</SectionTitle>
    <div className="flex justify-center md:justify-start space-x-6">
      <SocialLink href={SOCIALS.github} icon={<Github className="w-6 h-6" />} />
      <SocialLink
        href={SOCIALS.linkedin}
        icon={<Linkedin className="w-6 h-6" />}
      />
    </div>
  </div>
);

const SectionTitle: React.FC<SectionTitleProps> = ({ children, icon }) => (
  <h2 className="text-2xl font-semibold mb-6 uppercase flex items-center space-x-2">
    {icon && icon}
    <span>{children}</span>
  </h2>
);

const JobAccordionItem: React.FC<Experience> = ({
  icon,
  position,
  company,
  duration,
  achievements,
  technologies,
}) => (
  <AccordionItem
    value={`job-${company.toLowerCase().replace(/\s/g, "-")}`}
    className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <AccordionTrigger className="text-left hover:no-underline p-6">
      <div className="flex items-center space-x-4">
        <div className="md:min-w-12 md:min-h-12 md:max-w-12 md:max-h-12 rounded-full overflow-hidden flex items-center justify-center shadow-inner min-w-10 sm:min-h-10 sm:max-w-10 sm:max-h-10">
          <Image
            src={icon}
            alt=""
            className="object-contain w-full h-full"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col justify-between w-full gap-2">
          <h3 className="md:text-xl font-medium flex flex-col md:gap-2 gap-1 justify-between w-full">
            <span className="text-white">{position}</span>
            <span className="text-purple-400 font-semibold text-sm md:text-xl">
              {company}
            </span>
          </h3>
          <p className="text-xs md:text-sm text-gray-400 font-light">
            {duration}
          </p>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-gray-300 px-6 py-4 bg-gray-800/30">
      <div className="space-y-4">
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="py-1 px-3 text-sm font-semibold bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 hover:text-white transition-colors duration-200"
              >
                {technology}
              </Badge>
            ))}
          </div>
        )}
        <ul className="list-disc list-inside space-y-2 font-light text-sm md:text-base">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
);

const ProjectItem: React.FC<Project> = ({
  name,
  description,
  technologies,
  repo,
}) => (
  <AccordionItem
    value={`project-${name.toLowerCase().replace(/\s/g, "-")}`}
    className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <AccordionTrigger className="text-left hover:no-underline p-6">
      <h3 className="text-lg md:text-xl font-medium">{name}</h3>
    </AccordionTrigger>
    <AccordionContent className="text-gray-300 px-6 py-4 bg-gray-800/30">
      <div className="space-y-4">
        <p className="font-normal">{description}</p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Badge
                key={technology}
                variant="secondary"
                className="py-1 px-3 text-sm font-semibold bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 hover:text-white transition-colors duration-200"
              >
                {technology}
              </Badge>
            ))}
          </div>
        )}
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
        >
          View Repository
        </a>
      </div>
    </AccordionContent>
  </AccordionItem>
);

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div>
    <h3 className="text-xl font-medium mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant="secondary"
          className="py-1 px-3 text-sm font-semibold bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 hover:text-white transition-colors duration-200"
        >
          {skill}
        </Badge>
      ))}
    </div>
  </div>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <Link
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    {icon}
  </Link>
);

export default ResumePage;
