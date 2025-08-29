import { HeroCards } from "../components/cards/HeroCards"
import { FeaturesSection } from "../components/FeaturesSection"
import { BreadcrumbHeader } from "../components/header/BreadcrumbHeader"
import { AchievementSection } from "../components/AcheivementSection"
import { TrustedSection } from "../components/TrustedSection"


export const AboutPage = () => {
  return(
    <div>
      <BreadcrumbHeader name="About Us" subName="About Us" />
      <HeroCards/>
      {/* AboutCareerSection.jsx */}
      <FeaturesSection/>
      <AchievementSection/>
      {/* About instructoes section */}
      {/* FAQ */}
      <TrustedSection/>
    </div>
  )
}