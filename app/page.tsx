import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { StackSection } from "@/components/sections/StackSection";
import { ExperiencePreview } from "@/components/sections/ExperiencePreview";
import { GitHubReposSection } from "@/components/sections/GitHubReposSection";
import { BeyondCodeSection } from "@/components/sections/BeyondCodeSection";
import { WritingPreview } from "@/components/sections/WritingPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { getResumeHref } from "@/lib/resume";

export default function HomePage() {
  const resumeHref = getResumeHref();

  return (
    <>
      <HeroSection resumeHref={resumeHref} />
      <SelectedWorkSection />
      <StackSection />
      <GitHubReposSection />
      <ExperiencePreview />
      <BeyondCodeSection />
      <TestimonialsSection />
      <WritingPreview />
      <ContactCTA />
    </>
  );
}
