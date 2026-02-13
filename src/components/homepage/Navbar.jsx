import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar({ page, setPage }) {

  const [menuOpen, setMenuOpen] = useState(false)

  const coursesLabel = page === "courses" ? "Services" : "Courses"

  return (
    <>
      {/* ✅ NAVBAR */}
      <nav className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        w-[92%]
        max-w-7xl
        bg-white
        border border-gray-200
        shadow-lg
        rounded-full
        px-6
        py-3
        z-50
      ">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              🌅
            </div>

            <span className="font-semibold text-gray-700">
              Swami
            </span>
          </div>


          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">

            <li
              onClick={() => setPage('home')}
              className={`px-5 py-2 rounded-full cursor-pointer transition
                ${page === 'home'
                  ? 'bg-orange-500 text-white shadow'
                  : 'hover:text-orange-500'}
              `}
            >
              Home
            </li>

            <li
              onClick={() => setPage('courses')}
              className={`px-5 py-2 rounded-full cursor-pointer transition
                ${page === 'courses'
                  ? 'bg-orange-500 text-white shadow'
                  : 'hover:text-orange-500'}
              `}
            >
              {coursesLabel}
            </li>

            <li
              onClick={() => setPage('books')}
              className={`px-5 py-2 rounded-full cursor-pointer transition
                ${page === 'books'
                  ? 'bg-orange-500 text-white shadow'
                  : 'hover:text-orange-500'}
              `}
            >
              Books
            </li>

            <li
              onClick={() => setPage('video')}
              className={`px-5 py-2 rounded-full cursor-pointer transition
                ${page === 'video'
                  ? 'bg-orange-500 text-white shadow'
                  : 'hover:text-orange-500'}
              `}
            >
              Videos
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Bookings</li>
            <li className="hover:text-orange-500 cursor-pointer">Blogs</li>

          </ul>


          {/* Connect */}
          <button className="hidden lg:block bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition">
            Connect
          </button>


          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-2xl text-gray-700"
          >
            <FiMenu />
          </button>

        </div>

      </nav>



      {/* ✅ MOBILE MENU — OUTSIDE NAV */}
      {menuOpen && (

        <div className="fixed inset-0 bg-black/40 z-[999]">

          {/* Side Drawer */}
          <div className="
            fixed
            top-0
            right-0
            h-full
            w-[300px]
            bg-white
            shadow-2xl
            p-6
          ">

            <div className="flex justify-end mb-8">
              <FiX
                onClick={() => setMenuOpen(false)}
                className="text-3xl cursor-pointer"
              />
            </div>

            <ul className="flex flex-col gap-6 font-medium text-gray-700">

              <li
                onClick={() => {
                  setMenuOpen(false)
                  setPage('home')
                }}
                className={page === 'home'
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 cursor-pointer"}
              >
                Home
              </li>

              <li
                onClick={() => {
                  setMenuOpen(false)
                  setPage('courses')
                }}
                className={page === 'courses'
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 cursor-pointer"}
              >
                {coursesLabel}
              </li>

              <li
                onClick={() => {
                  setMenuOpen(false)
                  setPage('books')
                }}
                className={page === 'books'
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 cursor-pointer"}
              >
                Books
              </li>

              <li
                onClick={() => {
                  setMenuOpen(false)
                  setPage('video')
                }}
                className={page === 'video'
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500 cursor-pointer"}
              >
                Videos
              </li>
              <li className="hover:text-orange-500 cursor-pointer">Bookings</li>
              <li className="hover:text-orange-500 cursor-pointer">Blogs</li>

            </ul>

            <button className="mt-10 w-full bg-orange-500 text-white py-3 rounded-full font-medium hover:bg-orange-600 transition">
              Connect
            </button>

          </div>

        </div>
      )}

    </>
  )
}
