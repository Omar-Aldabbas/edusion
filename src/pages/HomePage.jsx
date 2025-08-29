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
import { MembersCards } from "../components/cards/MembersCards";


export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CareerSection />
      <AchievementSection />
      <TrustedSection />
      <FeaturesSection />
      <TopCoursesSection />
      <PlatformSection />
      <SubscribeSection />
      <TopicsSection/>
      <EventsSection/>
      <TestimonialsSection/>
      <MembersSection CardsComponent={MembersCards}/>
      <BlogSection/>
    </div>
  );
};
