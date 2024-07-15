import './App.css'
import CarouselSection from './components/Sections/CarouselSection/CarouselSection'
import FAQSection from './components/Sections/FAQSection/FAQSection'
import FeatureCards from './components/Sections/FeatureCards/FeatureCards'
import FooterSection from './components/Footer/FooterSection'
import FormSection from './components/Sections/FormSection/FormSection'
import Header from './components/Header/Header'
import MainSection from './components/Sections/MainSection/MainSection'
import NichesSection from './components/Sections/NichesSection/NichesSection'
import PaymentFlowSection from './components/Sections/PaymentFlowSection/PaymentFlowSection'
import ReasonsSection from './components/Sections/ReasonsSection/ReasonsSection'
import SolutionSteps from './components/Sections/SolutionSteps/SolutionSteps'
import TrustedBySection from './components/Sections/TrustedBySection/TrustedBySection'

function App() {
  return (
    <>
      <div className="">
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
    </>
  )
}

export default App
