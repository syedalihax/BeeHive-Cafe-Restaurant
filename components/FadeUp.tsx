'use client'
import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false, loading: () => <div /> }
)

interface FadeUpProps {
  children: ReactNode
  delay?: number
  className?: string
  key?: string | number
}

export default function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </MotionDiv>
  )
}
