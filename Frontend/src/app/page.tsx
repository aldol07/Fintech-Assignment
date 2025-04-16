import Link from "next/link";
import { AnimatedSection } from "./components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <AnimatedSection
          className="text-center max-w-4xl mx-auto"
          animation="fade"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight">
            Welcome to the Financial Multiverse
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Your gateway to a new era of investing. Choose your path, shape your
            future.
          </p>
          <Link
            href="/persona"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <AnimatedSection delay={0.2} animation="slide">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-300">
                Get personalized investment recommendations based on your unique
                style.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} animation="slide">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Smart Portfolio</h3>
              <p className="text-gray-300">
                Build and track your investments with cutting-edge tools.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.6} animation="slide">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-gray-300">
                Connect with like-minded investors and share your journey.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
