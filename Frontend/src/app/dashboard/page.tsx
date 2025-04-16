import React from "react";
import Link from "next/link";
import { AnimatedSection } from "../components/AnimatedSection";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      <main className="container mx-auto px-4 py-16">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Your Financial Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Track your investments and financial goals
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            {
              title: "Investment Portfolio",
              description: "View and manage your investments",
              icon: "📈",
            },
            {
              title: "Financial Goals",
              description: "Set and track your financial goals",
              icon: "🎯",
            },
          ].map((feature, index) => (
            <div key={index}>
              <AnimatedSection delay={index * 0.2}>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
