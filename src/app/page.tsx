import HomeHeroSection from './../Components/Home/HomeHeroSection/HomeHeroSection';
import HomeFee from './../Components/Home/HomeFee/HomeFee';
import HomeSpecialization from './../Components/Home/HomeSpecialization/HomeSpecialization';
import HomeProcess from './../Components/Home/HomeProcess/HomeProcess';
import HomeFaq from './../Components/Home/HomeFaq/HomeFaq';
import HomeApproval from './../Components/Home/HomeApproval/HomeApproval';
import HomeEligibility from './../Components/Home/HomeEligibility/HomeEligibility';
import HomeLearning from './../Components/Home/HomeLearning/HomeLearning';
import HomeCertificate from './../Components/Home/HomeCertificate/HomeCertificate';
import HomeCurriculum from './../Components/Home/HomeCurriculum/HomeCurriculum';

export default function HomePage() {
  return (
    <div id='home'>
      <HomeHeroSection />
      <HomeApproval />
      <span id='specializations'></span>
      <HomeSpecialization />
      <HomeFee />
      <span id='curriculum'></span>
      <HomeCurriculum />
      <HomeEligibility />
      <HomeLearning />
      <span id='certificate'></span>
      <HomeCertificate />
      <span id='process'></span>
      <HomeProcess />
      <span id='faq'></span>
      <HomeFaq />
    </div>
  )
}