'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Book, LogIn, UserPlus, User, LogOut } from 'lucide-react'

export default function Navbar() {
  const router =  useRouter()
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // Redirigir al inicio si no está autenticado
    }
  }, [status]);
 

 
  return (
    <div className="relative z-10 px-4 lg:px-6 h-20 flex items-center border-b border-white/20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-white" />
          <span className="text-3xl font-bold text-white">Fluency Edge</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-white hover:text-blue-200 transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-white hover:text-blue-200 transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-white hover:text-blue-200 transition-colors">
            Pricing
          </Link>
          {isLoggedIn && pathname !== '/dashboard' && (
            <Link href="/dashboard" className="text-white hover:text-blue-200 transition-colors">
              Dashboard
            </Link>
          )}

{isLoggedIn && pathname !== '/test-pages' && (
            <Link href="/test-pages" className="text-white hover:text-blue-200 transition-colors">
              Tests
            </Link>
          )}
        </nav>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-blue-200 transition-colors">
                  <User className="mr-2 h-4 w-4" /> {session?.user?.name || 'Account'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>
                  <Link href="/profile" className="flex items-center text-purple-600">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => signOut()}>
                  <span className="flex items-center text-purple-600">
                    <LogOut className="mr-2 h-4 w-4" /> Log out
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 transition-colors"
                onClick={() => signIn('oauth',{callbackUrl: '/dashboard'})}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Log In
              </Button>
              <Link href="/signup">
                <Button className="bg-white text-purple-600 hover:bg-blue-100 transition-colors">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}