import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Books from './components/Books'
import VideoSection from './components/VideoSection'
import Courses from "./components/Courses"
import Chapter from './components/Chapter'
import Community from './components/Community'
import Footer from './components/Footer'

export default function app() {
  return (
    <div className="min-h-screen bg-[#FFF9D9]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Books />
      <VideoSection />
      <Courses />
      <Chapter />
      <Community />
      <Footer />
    </div>
  )
}
