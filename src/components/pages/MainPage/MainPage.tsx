import HeroSection from '../../organism/HeroSection/HeroSection'
import AboutSection from '../../organism/AboutSection/AboutSection'
import Examples from '../../organism/Examples/Examples'
import FormComponent from '../../organism/FormComponent/FormComponent'

const MainPage = () => {
  return (
    <div className='flex flex-col gap-60 gap- items-center justify-center w-full'>
      <section className='h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full 2xl:mt-[-100px]'>
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