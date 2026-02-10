export default function MoreBooksSection() {

  const books = [
    {
      title: "Encyclopedia del ayurveda",
      desc: "Natural secrets to healing, prevention & longevity.",
      img: "https://picsum.photos/200/300?random=1",
    },
    {
      title: "Ayurveda Primer",
      desc: "The art of ancient natural wellness aligned with the laws of nature.",
      img: "https://picsum.photos/200/300?random=2",
    },
    {
      title: "21 Days of Joy",
      desc: "Replace doubt with joy and renew your inner peace.",
      img: "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg",
    },
    {
      title: "Bhagavad Gita for Modern Times",
      desc: "Understanding divine wisdom through modern teachings.",
      img: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
    },
    {
      title: "The Stress-Free College Student",
      desc: "Release stress and unlock clarity for academic success.",
      img: "https://picsum.photos/200/300?random=3",
    },
    {
      title: "The Ayurveda Encyclopedic",
      desc: "Natural secrets to healing, prevention & longevity.",
      img: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1175803216i/560872.jpg",
    },
    {
      title: "Bhagavad Gita for Modern Times",
      desc: "Timeless teachings to navigate today’s world with purpose.",
      img: "https://picsum.photos/200/300?random=7",
    },
  ];


  return (
    <section className="bg-[#EFE6C9] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-gray-800">
            More Books by Swami{" "}
            <span className="italic text-orange-500">Books</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover a curated collection of insightful books that will transform
            your perspective on leadership, personal growth, and spiritual
            development.
          </p>
        </div>


        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10">

          {books.map((book, index) => (
            <div key={index} className="text-center group">

              <div className="flex justify-center">
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-40 h-56 object-cover rounded-xl shadow-md group-hover:shadow-2xl transition duration-300"
                />
              </div>

              <h3 className="mt-5 font-semibold text-gray-800">
                {book.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
                {book.desc}
              </p>

              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition">
                🛒 Buy on Amazon
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
