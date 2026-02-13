export default function PrivacyPolicySection() {
  return (
    <section className="bg-[#EFE6C9] py-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
            Privacy <span className="text-orange-500 italic">Policy</span>
          </h1>

          <div className="w-24 h-[2px] bg-orange-400 mx-auto mt-4"></div>

          <p className="text-gray-600 mt-6 leading-relaxed">
            This privacy policy ("policy") will help you understand how{" "}
            <span className="text-orange-500 font-semibold">
              OrangeCowboy.com
            </span>{" "}
            uses and protects the data you provide to us when you visit and use
            this website. We reserve the right to change this policy at any given
            time, of which you will be promptly updated.
          </p>
        </div>


        {/* Divider */}
        <div className="border-t border-dashed border-orange-300 my-10"></div>


        {/* ===== Policy Grid ===== */}
        <div className="grid md:grid-cols-3 gap-8 text-gray-700">

          {/* LEFT TITLES */}
          <div className="space-y-10 font-semibold">
            <h3>What User Data We Collect</h3>
            <h3>Why We Collect Your Data</h3>
            <h3>Our Cookie Policy</h3>
            <h3>Links to Other Websites</h3>
            <h3>Restricting the Collection of your Personal Data</h3>
          </div>


          {/* RIGHT CONTENT */}
          <div className="md:col-span-2 space-y-10 text-gray-600 leading-relaxed">

            <p>
              When you visit the website, we do not collect any of your
              information. If you sign up for our newsletter we will collect your
              name and email address.
            </p>

            <p>
              If we collect your data it will be through you signing up for a
              newsletter only. Safeguarding and Securing the Data — We are
              committed to securing your data and keeping it confidential.
            </p>

            <p>
              Once you agree to allow our website to use cookies, please note
              that cookies don’t allow us to gain control of your computer in any
              way. We do not analyze any of your data and we do not store any
              information including cookies.
            </p>

            <p>
              Our website may contain links that lead to other websites. If you
              click on these links, we are not responsible for your data and
              privacy protection. Visiting those websites is not governed by this
              privacy policy agreement.
            </p>

            <p>
              At some point, you might wish to restrict the use and collection of
              your personal data.{" "}
              <span className="text-orange-500 font-semibold">
                OrangeCowboy.com
              </span>{" "}
              will not lease, sell or distribute your personal information to any
              third parties unless we have your permission.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
