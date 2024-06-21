import CheckOurTools from '../../components/CheckOurTools';
import Hero from './section/Hero';
import OurWorks from './section/OurWorks'
import RecentEventsSection from './section/RecentEvents';
import Team from './section/Team';

function LandingPage(){
  return (
    <div id='landing-background' className="bg-exer-charcoal">
      <div id="Hero-background" className="
        w-dvw h-dvh
      from-exer-charcoal to-exer-gunmetal bg-gradient-to-t
        flex justify-center
      ">
        <Hero />
      </div>
      <OurWorks />
      <Team />
      <CheckOurTools />
      <RecentEventsSection />
      
    </div>
  );
}

export default Landing;