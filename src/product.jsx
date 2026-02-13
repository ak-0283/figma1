import Footer from "./components/courses/Footer"

export default function ProductPage({ setPage }) {
  return (
    <>
      <div className="min-h-screen bg-[#FFF9D9] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Products</h1>
          <p className="text-gray-600 text-lg">Your products content will go here</p>
        </div>
      </div>
      <Footer setPage={setPage} />
    </>
  )
}
