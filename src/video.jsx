import Footer from "./components/courses/Footer"
import WatchSwamiSection from "./components/video/WatchSwamiSection"
import BrowsePlaylistSection from "./components/video/BrowsePlaylistSection";
import TvShowsAndCtaSection from "./components/video/TvShowsAndCtaSection.jsx";

export default function VideoPage({ setPage }) {
  return (
    <>
      <WatchSwamiSection />
      <BrowsePlaylistSection />
      <TvShowsAndCtaSection />
      <Footer setPage={setPage} />
    </>
  )
}
