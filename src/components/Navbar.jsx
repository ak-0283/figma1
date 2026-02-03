export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 pt-6">
      <div className="bg-white rounded-full shadow-sm flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            🌅
          </div>
          <span className="font-semibold text-gray-700">
            Swami
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="bg-orange-500 text-white px-4 py-2 rounded-full">
            Home
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Courses</li>
          <li className="hover:text-orange-500 cursor-pointer">Books</li>
          <li className="hover:text-orange-500 cursor-pointer">Bookings</li>
          <li className="hover:text-orange-500 cursor-pointer">Blogs</li>
        </ul>

        {/* Button */}
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium">
          Connect
        </button>
      </div>
    </nav>
  )
}
