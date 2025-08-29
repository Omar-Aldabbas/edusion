import { AchievementSection } from "../components/AcheivementSection";
import { CareerSection } from "../components/CareerSection";
import { EventsSection } from "../components/EventsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HeroSection } from "../components/HeroSection";
import { PlatformSection } from "../components/PlatfromSection";
import { SubscribeSection } from "../components/SubscribeSection";
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
      {/* MembersSection */}
      {/* blogSection */}
    </div>
  );
};
