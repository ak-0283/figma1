import { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";

export default function AvailableProductsSection() {

  /* ================= PRODUCTS ================= */

  const allProducts = [
    // Unisex Category
    {
      title: "Be The Light Everyday Unisex Tee",
      price: "$21.99",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop",
      category: "Unisex",
      bestseller: true,
    },
    {
      title: "Radiance Hoodie",
      price: "$46.99",
      img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=700&fit=crop",
      category: "Unisex",
      bestseller: true,
    },
    {
      title: "Mindful Vibes Unisex Sweatshirt",
      price: "$39.99",
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=700&fit=crop",
      category: "Unisex",
    },
    {
      title: "Inner Peace Joggers",
      price: "$44.99",
      img: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=600&h=700&fit=crop",
      category: "Unisex",
    },
    {
      title: "Zen Mode Pullover",
      price: "$42.99",
      img: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&h=700&fit=crop",
      category: "Unisex",
      bestseller: true,
    },

    // Men's Category
    {
      title: "Men's Classic T-Shirt",
      price: "$29.99",
      img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=700&fit=crop",
      category: "Men",
    },
    {
      title: "Men's Premium Polo",
      price: "$34.99",
      img: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&h=700&fit=crop",
      category: "Men",
    },
    {
      title: "Men's Casual Henley",
      price: "$32.99",
      img: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=700&fit=crop",
      category: "Men",
    },
    {
      title: "Men's Athletic Tank",
      price: "$24.99",
      img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=700&fit=crop",
      category: "Men",
    },

    // Women's Category
    {
      title: "Women's Relaxed Tee",
      price: "$34.99",
      img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=700&fit=crop",
      category: "Women",
    },
    {
      title: "Women's Flowy Tank",
      price: "$28.99",
      img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=700&fit=crop",
      category: "Women",
    },
    {
      title: "Women's Cropped Hoodie",
      price: "$48.99",
      img: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600&h=700&fit=crop",
      category: "Women",
      bestseller: true,
    },
    {
      title: "Women's Yoga Tee",
      price: "$31.99",
      img: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=600&h=700&fit=crop",
      category: "Women",
    },

    // Hat Category
    {
      title: "Energy Cap",
      price: "$19.99",
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=700&fit=crop",
      category: "Hat",
    },
    {
      title: "Spiritual Beanie",
      price: "$22.99",
      img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=700&fit=crop",
      category: "Hat",
    },
    {
      title: "Meditation Bucket Hat",
      price: "$24.99",
      img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=700&fit=crop",
      category: "Hat",
    },
    {
      title: "Trucker Hat - Mindful",
      price: "$21.99",
      img: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=600&h=700&fit=crop",
      category: "Hat",
    },

    // Notebook Category
    {
      title: "Spiritual Notebook",
      price: "$14.99",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=700&fit=crop",
      category: "Notebook",
    },
    {
      title: "Gratitude Journal",
      price: "$16.99",
      img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&h=700&fit=crop",
      category: "Notebook",
      bestseller: true,
    },
    {
      title: "Meditation Planner",
      price: "$18.99",
      img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=700&fit=crop",
      category: "Notebook",
    },
    {
      title: "Daily Affirmations Book",
      price: "$15.99",
      img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=700&fit=crop",
      category: "Notebook",
    },
    {
      title: "Mindfulness Notes",
      price: "$12.99",
      img: "https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?w=600&h=700&fit=crop",
      category: "Notebook",
    },

    // Stickers Category
    {
      title: "Aura Stickers Pack",
      price: "$9.99",
      img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=700&fit=crop",
      category: "Stickers",
    },
    {
      title: "Chakra Stickers Set",
      price: "$8.99",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=700&fit=crop",
      category: "Stickers",
    },
    {
      title: "Manifestation Stickers",
      price: "$11.99",
      img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=700&fit=crop",
      category: "Stickers",
      bestseller: true,
    },
    {
      title: "Zen Symbols Pack",
      price: "$10.99",
      img: "https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=600&h=700&fit=crop",
      category: "Stickers",
    },
    {
      title: "Yoga Poses Stickers",
      price: "$9.49",
      img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=700&fit=crop",
      category: "Stickers",
    },
  ];



  /* ================= STATES ================= */

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState(allProducts);



  /* ================= FILTER ================= */

  const applyFilter = () => {

    if (selectedCategory === "All") {
      setProducts(allProducts);
    } else if (selectedCategory === "Bestseller") {
      setProducts(allProducts.filter(p => p.bestseller));
    } else {
      setProducts(allProducts.filter(p => p.category === selectedCategory));
    }

    setDrawerOpen(false);
  };



  const categories = [
    "All",
    "Bestseller",
    "Unisex",
    "Men",
    "Women",
    "Hat",
    "Notebook",
    "Stickers",
  ];



  return (
    <section className="bg-[#EFE6C9] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">

          <h2 className="text-2xl font-serif text-gray-800">
            Available Products
          </h2>

          <button
            onClick={() => setDrawerOpen(true)}
            className="border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-white transition"
          >
            Categories
          </button>

        </div>



        {/* ================= PRODUCT GRID ================= */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product, index) => (

            <div
              key={index}
              className="bg-[#F4F0DC] rounded-3xl p-4 hover:shadow-xl transition"
            >

              <div className="relative rounded-2xl overflow-hidden">

                {product.bestseller && (
                  <span className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                )}

                <img
                  src={product.img}
                  alt=""
                  className="w-full h-52 md:h-64 object-cover rounded-2xl"
                />
              </div>



              <div className="mt-4">

                <h3 className="text-sm font-medium text-gray-800">
                  {product.title}
                </h3>

                <p className="mt-1 font-semibold">
                  {product.price}
                </p>

                <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                  🛒 Buy Now
                </button>

                <div className="flex items-center gap-1 mt-2 text-orange-400 text-sm">
                  {[...Array(5)].map((_, i) => <FaStar key={i}/>)}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>



      {/* ================= DRAWER ================= */}

      {drawerOpen && (
        <>

          {/* Overlay */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />



          {/* Drawer */}
          <div className="
            fixed
            right-0
            top-0
            h-full
            w-full
            sm:w-[420px]
            bg-white
            z-50
            p-8
            overflow-y-auto
            shadow-2xl
          ">

            {/* Close */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-serif">
                Categories
              </h3>

              <FaTimes
                className="cursor-pointer text-xl"
                onClick={() => setDrawerOpen(false)}
              />
            </div>



            {/* CATEGORY LIST */}
            <div className="grid grid-cols-2 gap-4">

              {categories.map(cat => (

                <div
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    border rounded-xl p-4 cursor-pointer text-center
                    transition
                    ${
                      selectedCategory === cat
                        ? "border-orange-500 bg-orange-50"
                        : "hover:border-orange-400"
                    }
                  `}
                >
                  {cat}
                </div>

              ))}

            </div>



            {/* APPLY BUTTON */}
            <button
              onClick={applyFilter}
              className="mt-10 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold"
            >
              Apply
            </button>

          </div>

        </>
      )}

    </section>
  );
}
