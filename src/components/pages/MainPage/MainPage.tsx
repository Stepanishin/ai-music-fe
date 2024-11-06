import HeroSection from '../../organism/HeroSection/HeroSection'
import AboutSection from '../../organism/AboutSection/AboutSection'
import Examples from '../../organism/Examples/Examples'
import FormComponent from '../../organism/FormComponent/FormComponent'

const MainPage = () => {
  return (
    <div className='flex flex-col gap-32 lg:gap-60 gap- items-center justify-center w-full'>
      <section className='lg:h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full relative'>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <Examples />
      </section>
      <section className='w-full'>
        <FormComponent />
      </section>
    </div>
  )
}

export default MainPage