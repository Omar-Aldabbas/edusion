import { AchievementSection } from "../components/AcheivementSection";
import { BlogSection } from "../components/BlogSection";
import { CareerSection } from "../components/CareerSection";
import { EventsSection } from "../components/EventsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HeroSection } from "../components/HeroSection";
import { MembersSection } from "../components/MembersSection";
import { PlatformSection } from "../components/PlatfromSection";
import { SubscribeSection } from "../components/SubscribeSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { TopCoursesSection } from "../components/TopCoursesSection";
import { TopicsSection } from "../components/TopicsSection";
import { TrustedSection } from "../components/TrustedSection";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CareerSection />
      <AchievementSection />
      <TrustedSection />
      <FeaturesSection />
      {/* CoursesSection */}
      <TopCoursesSection />
      {/* PlatforSection */}
      <PlatformSection />
      {/* SubscribtionSection */}
      <SubscribeSection />
      {/* TopicsSection */}
      <TopicsSection/>
      {/* EventsSection */}
      <EventsSection/>
      {/* testonomialsSection */}
      <TestimonialsSection/>
      {/* MembersSection */}
      <MembersSection/>
      {/* blogSection */}
      <BlogSection/>
    </div>
  );
};
