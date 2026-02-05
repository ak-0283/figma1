import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar({ page, setPage }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    // ⭐ FLOATING WRAPPER (MOST IMPORTANT)
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full flex justify-center z-50">

      <nav className="
        w-[92%]
        max-w-7xl
        bg-white/90
        backdrop-blur-md
        border border-gray-200
        shadow-lg
        rounded-full
        px-6
        py-3
      ">

        <div className="flex items-center justify-between">

          {/* ✅ LOGO */}
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


          {/* ✅ DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

            {/* HOME */}
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


            {/* COURSES */}
            <li
              onClick={() => setPage('courses')}
              className={`px-5 py-2 rounded-full cursor-pointer transition
                ${page === 'courses'
                  ? 'bg-orange-500 text-white shadow'
                  : 'hover:text-orange-500'}
              `}
            >
              Courses
            </li>

            <li className="hover:text-orange-500 cursor-pointer">Books</li>
            <li className="hover:text-orange-500 cursor-pointer">Bookings</li>
            <li className="hover:text-orange-500 cursor-pointerा pointer">Blogs</li>

          </ul>


          {/* ✅ CONNECT BUTTON */}
          <button className="
            hidden md:block
            bg-orange-500
            text-white
            px-6
            py-2
            rounded-full
            font-medium
            hover:bg-orange-600
            transition
          ">
            Connect
          </button>


          {/* ✅ MOBILE ICON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl"
          >
            <FiMenu />
          </button>

        </div>



        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (

          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">

            <div className="
              fixed
              top-0 right-0
              h-full
              w-[280px]
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

              <ul className="flex flex-col gap-6 font-medium">

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
                  Courses
                </li>

                <li className="hover:text-orange-500 cursor-pointer">Books</li>
                <li className="hover:text-orange-500 cursor-pointer">Bookings</li>
                <li className="hover:text-orange-500 cursor-pointer">Blogs</li>

              </ul>

              <button className="mt-10 w-full bg-orange-500 text-white py-3 rounded-full font-medium hover:bg-orange-600 transition">
                Connect
              </button>

            </div>

          </div>
        )}

      </nav>
    </div>
  )
}
