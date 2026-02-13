import Footer from "./components/courses/Footer"
import PrivacyPolicySection from "./components/blog/PrivacyPolicySection"
import ContactSection from "./components/blog/ContactSection"
import FaqSection from "./components/blog/FaqSection"

export default function BlogPage({ setPage }) {
  return (
    <>
      <PrivacyPolicySection />
      <ContactSection />
      <FaqSection />
      <Footer setPage={setPage} />
    </>
  )
}
