import { HeroCards } from "../components/cards/HeroCards";
import { FeaturesSection } from "../components/FeaturesSection";
import { BreadcrumbHeader } from "../components/header/BreadcrumbHeader";
import { AchievementSection } from "../components/AcheivementSection";
import { TrustedSection } from "../components/TrustedSection";
import { CareerSection2 } from "../components/CareerSection2";
import { MembersSection } from "../components/MembersSection";
import { MembersCards2 } from "../components/cards/MembersCards2";
import { QuestionsSection } from "../components/QuestionsSection";

export const AboutPage = () => {
  return (
    <div>
      <BreadcrumbHeader name="About Us" subName="About Us" />
      <HeroCards />
      <CareerSection2 />
      <FeaturesSection />
      <AchievementSection />
      <MembersSection CardsComponent={MembersCards2} />
      <QuestionsSection />
      <TrustedSection />
    </div>
  );
};
