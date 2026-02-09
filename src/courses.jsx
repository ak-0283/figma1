import HeroCourses from "./components/courses/HeroCourses"
import Footer from "./components/courses/Footer"
import ExperientialServices from "./components/courses/ExperientialServices"
import AdvancedPathways from "./components/courses/AdvancedPathways"
import Choose from "./components/courses/ChoosePath"
import Speaking from "./components/courses/SpeakingInviteSection"

export default function Courses({ setPage }) {
  return (
    <>
      <HeroCourses />
      <ExperientialServices />
      <AdvancedPathways />
      <Choose />
      <Speaking />
      <Footer />
    </>
  )
}
