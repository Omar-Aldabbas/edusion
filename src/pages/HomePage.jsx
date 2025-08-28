
import { AchievementSection } from "../components/AcheivementSection"
import { CareerSection } from "../components/CareerSection"
import { FeaturesSection } from "../components/FeaturesSection"
import { HeroSection } from "../components/HeroSection"
import { TopCoursesSection } from "../components/TopCoursesSection"
import { TrustedSection } from "../components/TrustedSection"


export const HomePage = () => {

  return (
    <div>
      <HeroSection/>
      <CareerSection/>
      <AchievementSection/>
      <TrustedSection/>
      <FeaturesSection/>
      {/* CoursesSection */}
      <TopCoursesSection/>
      {/* PlatforSection */}
      {/* SubscribtionSection */}
      {/* TopicsSection */}
      {/* EventsSection */}
      {/* testonomialsSection */}
      {/* MembersSection */}
      {/* PlogSection */}
    </div>
  )
}