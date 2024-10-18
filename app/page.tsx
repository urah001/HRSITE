import Link from "next/link";
import Footer from "./UiComponents/footer";
import Header from "./UiComponents/header";
import MainSection from "./UiComponents/mainSection";
import Navbar from "./UiComponents/navbar";
import "./globals.css";
import { Button } from "@/components/ui/button";
export default function Home() {
  {
    /* using the rule of color palette which state that use primary, secondary and tertiary colors in 60%, 30% and 10% proportions, respectively
   White (60%): Backgrounds of major sections, creating a clean, spacious feel.
   Slate (30%): Navbar, footer, and headings to ground the design.
   Blue (10%): Buttons, links, and accents for key interactive elements.*/
  }
  return (
    <div className="min-h-screen bg-slate-50 bg-background text-foreground  flex flex-col">
      {/* header section of the webpage */}
      {/* <Header /> */}
      <div className="bg-slate-800 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">HR page</span>
            </div>

            <div className="ml-auto">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      {/* main section / hero section of the webpage */}
      {/* <MainSection /> */}
      <section className="bg-white text-slate-800">
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('')" }}
        >
          {/* Overlay for better text visibility (optional) */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-bold text-white">
              Welcome to Our HR Solutions
            </h1>
            <p className="text-lg text-slate-300 mt-4">
              Empowering your workforce with innovative HR solutions.
            </p>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* about us */}
      <div
        id="about"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center"
      >
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Our Vision and Mission
        </h1>
        <p className="mt-6 text-xl max-w-3xl text-slate-600">
          Redefining industry standards through consultation, our innovative
          approach integrates cutting-edge technology with expert insights,
          driving transformative change and setting new benchmarks for
          excellence.
        </p>
        <div className="mt-10">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Button>
        </div>
        {/* vision and mission */}
        <div className="flex justify-center space-x-8 my-12">
          {/* Mission Section */}
          <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-slate-300">
              Our mission is to cultivate an empowering atmosphere for skill
              acquisition and capacity enhancement that heralds a holistic
              growth and developent for individuals and organizations
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-slate-300">
              To become a premier organization dedicated to enhancing both
              personal and professional capacities of individuals and
              businesses, fostering efficiency, heightened productivity, and
              innovation.
            </p>
          </div>
        </div>
      </div>
      {/* footer section of the webpage */}
      {/* <Footer /> */}
      <footer className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">HR Solutions</h3>
              <p className="text-slate-300">
                Empowering your workforce with innovative HR solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-blue-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-blue-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-blue-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-blue-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-slate-300">
                123 HR Street, Business City, 12345
              </p>
              <p className="text-slate-300">Phone: (123) 456-7890</p>
              <p className="text-slate-300">Email: info@hrsolutions.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-300">
              &copy; 2024 HR Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
