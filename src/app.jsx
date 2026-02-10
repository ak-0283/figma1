import { useState } from 'react'
import Navbar from './components/homepage/Navbar'

import Hero from './components/homepage/Hero'
import Stats from './components/homepage/Stats'
import Services from './components/homepage/Services'
import Books from './components/homepage/Books'
import VideoSection from './components/homepage/VideoSection'
import Courses from "./components/homepage/Courses"
import Chapter from './components/homepage/Chapter'
import Community from './components/homepage/Community'
import Footer from './components/homepage/Footer'
import CoursesPage from './courses.jsx'
import BooksPage from './books.jsx'

export default function App() {

  const [page, setPage] = useState('home')

  return (

    <div className="min-h-screen bg-[#FFF9D9]">

      <Navbar page={page} setPage={setPage} />

      {page === 'home' && (
        <div className="pt-32">
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
      )}

      {page === 'courses' && (
        <div className="pt-32">
          <CoursesPage setPage={setPage} />
        </div>
      )}

      {page === 'books' && (
        <div className="pt-32">
          <BooksPage setPage={setPage} />
        </div>
      )}

    </div>
  )
}
