"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

const personas = [
  {
    id: "innovator",
    name: "Innovator",
    description:
      "Always looking for the next big thing in tech and finance. You're drawn to emerging markets, disruptive technologies, and cutting-edge investment opportunities.",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500",
    traits: ["Forward-thinking", "Tech-savvy", "Early adopter"],
  },
  {
    id: "traditionalist",
    name: "Traditionalist",
    description:
      "Prefer proven strategies and stable, long-term investments. You value consistency, reliability, and the wisdom of time-tested financial approaches.",
    icon: "🏛️",
    color: "from-green-500 to-emerald-500",
    traits: ["Disciplined", "Patient", "Value-focused"],
  },
  {
    id: "adventurer",
    name: "Adventurer",
    description:
      "Thrive on risk and excitement in the market. You're willing to explore unconventional opportunities and aren't afraid to take calculated risks for potentially higher returns.",
    icon: "🏃",
    color: "from-orange-500 to-red-500",
    traits: ["Risk-tolerant", "Adaptable", "Opportunity-seeker"],
  },
  {
    id: "athlete",
    name: "Athlete",
    description:
      "Disciplined, goal-oriented, and performance-driven. You approach investing like training—with dedication, measurable targets, and a competitive edge.",
    icon: "🏆",
    color: "from-purple-500 to-indigo-500",
    traits: ["Goal-oriented", "Competitive", "Consistent"],
  },
  {
    id: "artist",
    name: "Artist",
    description:
      "Creative approach to investing with unique perspectives. You see patterns others miss and aren't afraid to build a portfolio that reflects your individual vision.",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
    traits: ["Creative", "Intuitive", "Unique perspective"],
  },
];

export default function PersonaSelector() {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePersonaSelect = async (personaId: string) => {
    if (selectedPersona === personaId) return;

    setSelectedPersona(personaId);
    setIsLoading(true);

    // Mock API call to save the persona selection
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch("/api/persona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "user-" + Math.random().toString(36).substring(2, 9),
          persona: personaId,
        }),
      });

      if (response.ok) {
        // Show the chatbot placeholder after successful selection
        setShowChatbot(true);
      }
    } catch (error) {
      console.error("Error saving persona:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedPersonaData = selectedPersona
    ? personas.find((p) => p.id === selectedPersona)
    : null;

  return (
    <div className="space-y-12">
      {/* Selected Persona Summary - appears when one is chosen */}
      {selectedPersona && (
        <AnimatedSection animation="fade">
          <div
            className={`p-6 rounded-xl bg-gradient-to-r ${selectedPersonaData?.color} bg-opacity-20 mb-8`}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="text-6xl bg-white/20 h-20 w-20 flex items-center justify-center rounded-full">
                {selectedPersonaData?.icon}
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">
                  You selected: {selectedPersonaData?.name}
                </h2>
                <p className="text-white/80 mb-4">
                  {selectedPersonaData?.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {selectedPersonaData?.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Persona Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personas.map((persona, index) => (
          <AnimatedSection
            key={persona.id}
            delay={index * 0.1}
            animation="slide"
          >
            <div
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer border-2 ${
                selectedPersona === persona.id
                  ? "border-white shadow-lg shadow-white/20"
                  : "border-transparent hover:border-white/50"
              } h-full flex flex-col`}
              onClick={() => handlePersonaSelect(persona.id)}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{persona.icon}</div>
                <h3 className="text-xl font-semibold">{persona.name}</h3>
                {selectedPersona === persona.id && (
                  <FaCheckCircle className="ml-auto text-green-400" />
                )}
              </div>
              <p className="text-gray-300 flex-grow">{persona.description}</p>
              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-2">
                  {persona.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
                <div
                  className={`h-1 w-full bg-gradient-to-r ${persona.color} rounded-full`}
                ></div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Chatbot Placeholder */}
      {showChatbot && (
        <AnimatedSection animation="bounce">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/20">
            <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">FinBot Coming Soon!</h3>
            <p className="text-gray-300 mb-6">
              We're building a personalized AI assistant that will help you
              navigate your financial journey as a{" "}
              <span className="font-semibold text-white">
                {selectedPersona
                  ? personas.find((p) => p.id === selectedPersona)?.name
                  : "selected"}{" "}
              </span>
              investor. Get tailored advice, market insights, and educational
              resources aligned with your investment style.
            </p>
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all">
              Join the Waitlist
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Loading indicator */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl flex flex-col items-center">
            <FaSpinner className="animate-spin text-4xl mb-4" />
            <p>Processing your selection...</p>
          </div>
        </div>
      )}
    </div>
  );
}
