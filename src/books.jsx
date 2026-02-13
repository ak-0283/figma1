import Footer from "./components/courses/Footer"
import BookHeroSection from "./components/book/BooksHeroSection.jsx"
import MoreBooksSection from "./components/book/MoreBooksSection.jsx"
import RecognitionSection from "./components/book/RecognitionSection.jsx"

export default function BooksPage({ setPage }) {
  return (
    <>
      <BookHeroSection />
      <MoreBooksSection />
      <RecognitionSection />
      <Footer setPage={setPage} />
    </>
  )
}
