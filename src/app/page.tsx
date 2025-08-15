'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const [selectedNav, setSelectedNav] = useState('Home')

  return (
    <main style={{
      background: 'linear-gradient(to right, #0E0E14, #56567A)',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      display: 'flex'
    }}>
      <Sidebar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />

      {/* Main Content Area */}
      <div style={{
        marginLeft: '264px',
        flex: 1,
        height: '100vh',
        padding: '8px 8px 8px 12px'
      }}>
        {/* White Content Container */}
        <div style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: '100%',
          borderRadius: '8px'
        }}>
          {/* Main content will go here */}
        </div>
      </div>
    </main>
  )
}