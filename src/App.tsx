import './App.css'
import CarouselSection from './components/CarouselSection'
import FAQSection from './components/FAQSection'
import FeatureCards from './components/FeatureCards'
import FooterSection from './components/Footer/FooterSection'
import FormSection from './components/FormSection'
import Header from './components/Header/Header'
import MainSection from './components/Sections/MainSection/MainSection'
import NichesSection from './components/NichesSection'
import PaymentFlowSection from './components/PaymentFlowSection'
import ReasonsSection from './components/Sections/ReasonsSection/ReasonsSection'
import SolutionSteps from './components/Sections/SolutionSteps/SolutionSteps'
import TrustedBySection from './components/TrustedBySection'
import MobileHeader from './components/MobileHeader'
import MobileSectionTwo from './components/MobileSectionTwo'
import MobileSectionThree from './components/MobileSectionThree'
import MobileSectionFour from './components/MobileSectionFour'
import MobileSectionFive from './components/MobileSectionFive'
import MobileSectionSix from './components/MobileSectionSix'
import MobileSectionSeven from './components/MobileSectionSeven'
import MobileSectionEight from './components/MobileSectionEight'
import MobileSectionNine from './components/MobileSectionNine'
import MobileFAQSection from './components/MobileFAQSection'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="block md:hidden">
          <MobileHeader />
          <MobileSectionTwo />
          <MobileSectionThree />
          <MobileSectionFour /> 
          <MobileSectionFive />
          <MobileSectionSix />
          <MobileSectionSeven />
          <MobileSectionEight />
          <MobileSectionNine />
          <MobileFAQSection />
        </div>
        <div className="hidden md:block">
          <Header />
          <main className="flex-1">
            <MainSection />
            <ReasonsSection />
            <FeatureCards />
            <SolutionSteps />
            <NichesSection />
            <PaymentFlowSection />
            <CarouselSection />
            <TrustedBySection />
            <FormSection />
            <FAQSection />
          </main>
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default App
