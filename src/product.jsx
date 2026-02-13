import Footer from "./components/courses/Footer"
import AvailableProductsSection from "./components/product/AvailableProductsSection"


export default function ProductPage({ setPage }) {
  return (
    <>
      <AvailableProductsSection />
      <Footer setPage={setPage} />
    </>
  )
}
