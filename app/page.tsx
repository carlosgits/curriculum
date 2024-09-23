'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, BookOpen, Award, Users } from "lucide-react"

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-600 to-blue-600 relative overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          25% { transform: translate(5%, 5%); }
          50% { transform: translate(10%, 0); }
          75% { transform: translate(5%, -5%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white opacity-10 rounded-full"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 30}s infinite ease-in-out`,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white opacity-10"
            style={{
              width: '2px',
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 20 + 30}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
      
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Master Spanish with Fluency Edge Exams
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Where "¿Cómo estás?" is just the beginning, and our exams are your ticket to Spanish fluency!
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-blue-100">
                  Take our exams and prove you're not just another "Despacito" enthusiast!
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-blue-100 transition-colors">
                  Start Your First Exam
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 transition-colors">
                  Learn More
                </Button>

              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800">
              Why Choose Fluency Edge Exams?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: GraduationCap, title: "Adaptive Exams", description: "Tests that evolve with you, just like your ability to roll those R's" },
                { icon: BookOpen, title: "Updated Content", description: "Fresh exam material, because language changes faster than your learning speed" },
                { icon: Award, title: "Instant Certifications", description: "Prove you're not just ordering tacos anymore, get certified on the spot" },
                { icon: Users, title: "Peer Comparisons", description: "See how you stack up against others who also struggle with 'ser' vs 'estar'" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-purple-100 to-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className="h-12 w-12 mb-4 text-purple-600" />
                  <h3 className="text-xl font-bold mb-2 text-purple-800">{feature.title}</h3>
                  <p className="text-purple-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
              Exam Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", quote: "Fluency Edge exams helped me go from 'No hablo español' to 'Hablo español... ¡y con confianza!'" },
                { name: "Michael Lee", quote: "The adaptive exams are challenging, but now I can confidently order more than just cerveza!" },
                { name: "Emma García", quote: "Best exam platform ever! I aced my job interview in Spanish thanks to Fluency Edge." },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-purple-700 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-bold text-blue-600">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800">
              Exam Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$9.99", features: ["Access to beginner exams", "Monthly progress reports", "Email support", "Learn to ace 'Hola' and 'Gracias'"] },
                { name: "Pro", price: "$19.99", features: ["Access to all exam levels", "Weekly detailed reports", "Priority support", "Group study sessions", "Master the subjunctive mood"] },
                { name: "Premium", price: "$29.99", features: ["Unlimited exam attempts", "Personal exam coach", "Official certifications", "Lifetime access", "Become fluent enough to debate in Spanish"] },
              ].map((plan, index) => (
                <div key={index} className="border border-purple-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-2 text-purple-800">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-4 text-blue-600">{plan.price}<span className="text-sm font-normal">/month</span></p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-purple-700">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 text-white hover:bg-blue-600 transition-colors">
                    Choose Plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Ace Your Spanish Exams?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Join thousands of students who are mastering Spanish with Fluency Edge Exams. It's more rewarding than finding the perfect use of 'pero' vs 'sino'!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white/90 border-white"
                    placeholder="Enter your email"
                    type="email"
                    aria-label="Email for exam registration"
                  />
                  <Button type="submit" className="bg-white text-purple-600 hover:bg-blue-100 transition-colors">
                    Start Exams
                  </Button>
                </form>
                <p className="text-xs text-blue-100">
                  By signing up, you agree to our terms of service and privacy policy. No accidental subjunctives included.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 py-6 w-full shrink-0 border-t border-white/20">
        <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">© 2023 Fluency Edge. All rights reserved. Exam anxiety not included.</p>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm hover:underline underline-offset-4 text-blue-100 hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-sm hover:underline underline-offset-4 text-blue-100 hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}