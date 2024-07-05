import './App.css'
import CarouselSection from './components/CarouselSection'
import FAQSection from './components/FAQSection'
import FeatureCards from './components/FeatureCards'
import FooterSection from './components/FooterSection'
import FormSection from './components/FormSection'
import Header from './components/Header'
import MainSection from './components/MainSection'
import NichesSection from './components/NichesSection'
import PaymentFlowSection from './components/PaymentFlowSection'
import ReasonsSection from './components/ReasonsSection'
import SolutionSteps from './components/SolutionSteps'
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
import TimeSection from './components/TimeSection'

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
            <TimeSection />
            <FAQSection />
          </main>
          <FooterSection />
        </div>
      </div>
    </>
  )
}

export default App
