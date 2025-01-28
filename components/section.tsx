import { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen flex items-center ${className}`}>
      <div className="w-full max-w-5xl mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

