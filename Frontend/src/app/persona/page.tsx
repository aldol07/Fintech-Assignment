import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "../components/AnimatedSection";
import PersonaSelector from "../components/PersonaSelector";
import { FaChevronLeft, FaQuestionCircle } from "react-icons/fa";

export default function PersonaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <FaChevronLeft />
            <span>Back to Home</span>
          </Link>
          <div className="font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            FinMultiverse
          </div>
          <Link
            href="/help"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <FaQuestionCircle />
            <span className="hidden sm:inline">Help</span>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <AnimatedSection
          className="text-center mb-16 max-w-4xl mx-auto"
          animation="fade"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
            Choose Your Investor Vibe
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Select the persona that best matches your investment style and goals
          </p>
          <div className="bg-white/10 backdrop-blur-lg p-4 md:p-6 rounded-xl text-sm md:text-base mb-12 max-w-2xl mx-auto">
            <p className="text-gray-200">
              Your selected persona will customize your entire experience, from
              investment recommendations to risk assessment and educational
              content.
            </p>
          </div>
        </AnimatedSection>

        {/* Persona Selection */}
        <PersonaSelector />

        {/* Bottom CTA */}
        <AnimatedSection
          className="text-center mt-16"
          delay={0.4}
          animation="scale"
        >
          <p className="text-gray-300 mb-4">
            Not sure which persona fits you best?
          </p>
          <Link
            href="/persona-quiz"
            className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
          >
            Take Our Investor Personality Quiz
          </Link>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 FinMultiverse. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
