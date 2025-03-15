import React from 'react'

export default function Footer() {
  return (
    <div class="w-full">
    <footer className="footer items-center px-6 py-4">
      <aside className="grid-flow-col items-center">
        <p>&copy;2025 <a class="link link-hover font-medium" href="#">Maricely Villalobos</a></p>
      </aside>
      <nav class="text-base-content grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a className="link link-hover" href="#">License</a>
        <a className="link link-hover" href="#">Help</a>
        <a className="link link-hover" href="#">Contact</a>
        <a className="link link-hover" href="#">Policy</a>
      </nav>
    </footer>
  </div>
)}
