'use client'

import Image from 'next/image'
import { useState } from 'react'

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
      {/* Left Sidebar */}
      <div style={{
        width: '264px',
        height: '100vh',
        padding: '26px 0px 26px 20px',
        position: 'fixed',
        left: 0,
        top: 0,
        backgroundColor: 'transparent'
      }}>
        <Image
          src="/images/logo_melly_main.png"
          alt="Mellowya Logo"
          width={136}
          height={28}
          style={{
            display: 'block'
          }}
        />
        
        {/* Navigation Menu */}
        <div style={{
          marginTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          {/* Home */}
          <div 
            onClick={() => setSelectedNav('Home')}
            style={{
              width: '100%',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: selectedNav === 'Home' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              cursor: 'pointer'
            }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_107_2615)">
                <path d="M13 12.2381V5.7619C13 5.64362 12.9729 5.52697 12.9208 5.42117C12.8687 5.31538 12.7931 5.22335 12.7 5.15238L7.45 1.15238C7.32018 1.05347 7.16228 1 7 1C6.83772 1 6.67982 1.05347 6.55 1.15238L1.3 5.15238C1.20685 5.22335 1.13125 5.31538 1.07918 5.42117C1.02711 5.52697 1 5.64362 1 5.7619V12.2381C1 12.4402 1.07902 12.634 1.21967 12.7768C1.36032 12.9197 1.55109 13 1.75 13H4.75C4.94891 13 5.13968 12.9197 5.28033 12.7768C5.42098 12.634 5.5 12.4402 5.5 12.2381V9.95238C5.5 9.75031 5.57902 9.55652 5.71967 9.41363C5.86032 9.27075 6.05109 9.19048 6.25 9.19048H7.75C7.94891 9.19048 8.13968 9.27075 8.28033 9.41363C8.42098 9.55652 8.5 9.75031 8.5 9.95238V12.2381C8.5 12.4402 8.57902 12.634 8.71967 12.7768C8.86032 12.9197 9.05109 13 9.25 13H12.25C12.4489 13 12.6397 12.9197 12.7803 12.7768C12.921 12.634 13 12.4402 13 12.2381Z" stroke={selectedNav === 'Home' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_107_2615">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span style={{
              marginLeft: '12px',
              color: selectedNav === 'Home' ? '#FFFFFF' : '#A4A4B4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              fontWeight: 500
            }}>
              Home
            </span>
          </div>

          {/* All Songs */}
          <div 
            onClick={() => setSelectedNav('All songs')}
            style={{
              width: '100%',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: selectedNav === 'All songs' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              cursor: 'pointer'
            }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_107_2616)">
                <path d="M0.5 5.14307H13.5M12.3393 12.1074H1.66071C1.35287 12.1074 1.05764 11.9851 0.839965 11.7674C0.622289 11.5497 0.5 11.2545 0.5 10.9466V3.05378C0.5 2.74594 0.622289 2.45071 0.839965 2.23303C1.05764 2.01536 1.35287 1.89307 1.66071 1.89307H3.86288C4.09206 1.89307 4.31611 1.96092 4.50679 2.08807L5.31464 2.62664C5.50532 2.75378 5.72937 2.82163 5.95855 2.82164H12.3393C12.6471 2.82164 12.9424 2.94393 13.16 3.1616C13.3777 3.37928 13.5 3.67451 13.5 3.98235V10.9466C13.5 11.2545 13.3777 11.5497 13.16 11.7674C12.9424 11.9851 12.6471 12.1074 12.3393 12.1074Z" stroke={selectedNav === 'All songs' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_107_2616">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span style={{
              marginLeft: '12px',
              color: selectedNav === 'All songs' ? '#FFFFFF' : '#A4A4B4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              fontWeight: 500
            }}>
              All songs
            </span>
          </div>

          {/* Inspiration */}
          <div 
            onClick={() => setSelectedNav('Inspiration')}
            style={{
              width: '100%',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: selectedNav === 'Inspiration' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              cursor: 'pointer'
            }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_107_2622)">
                <path d="M1.86842 13.5C1.4921 13.5 1.17007 13.3703 0.902316 13.1109C0.634561 12.8514 0.500456 12.5392 0.5 12.1741V3.97042C0.5 3.6942 0.577088 3.44295 0.731263 3.21667C0.885439 2.99039 1.09344 2.82731 1.35526 2.72743L6.82895 0.606068C7.28509 0.429288 7.71272 0.473483 8.11184 0.738654C8.51096 1.00382 8.71052 1.37396 8.71052 1.84906V2.89317C9.08684 2.89317 9.4091 3.0231 9.67731 3.28297C9.94552 3.54283 10.0794 3.85485 10.0789 4.21902V4.88195C10.0789 5.06977 10.0133 5.22733 9.88189 5.35461C9.75052 5.48189 9.58814 5.54531 9.39473 5.54487C9.20133 5.54443 9.03894 5.48079 8.90758 5.35395C8.77621 5.22711 8.71052 5.06977 8.71052 4.88195V4.21902H1.86842V12.1741H4.725C4.91886 12.1741 5.08147 12.2378 5.21284 12.3651C5.34421 12.4923 5.40967 12.6497 5.40921 12.8371C5.40875 13.0245 5.34307 13.182 5.21216 13.3097C5.08124 13.4375 4.91886 13.5009 4.725 13.5H1.86842ZM4.60526 2.89317H7.3421V1.86563L4.60526 2.89317ZM10.0789 13.5C9.13245 13.5 8.32577 13.1767 7.65889 12.5301C6.99202 11.8836 6.65835 11.102 6.65789 10.1854C6.65744 9.26875 6.9911 8.48716 7.65889 7.84059C8.32668 7.19401 9.13337 6.87072 10.0789 6.87072C11.0245 6.87072 11.8314 7.19401 12.4997 7.84059C13.1679 8.48716 13.5014 9.26875 13.5 10.1854C13.4986 11.102 13.165 11.8838 12.499 12.5308C11.833 13.1778 11.0263 13.5009 10.0789 13.5ZM9.75394 11.5278L11.4987 10.4671C11.6127 10.4008 11.6697 10.3069 11.6697 10.1854C11.6697 10.0638 11.6127 9.96991 11.4987 9.90361L9.75394 8.84293C9.63991 8.77664 9.52291 8.77377 9.40294 8.83431C9.28298 8.89486 9.22323 8.99165 9.22368 9.12467V11.246C9.22368 11.3786 9.28366 11.4754 9.40363 11.5364C9.52359 11.5974 9.64037 11.5945 9.75394 11.5278Z" fill={selectedNav === 'Inspiration' ? '#AB9EFF' : '#A4A4B4'}/>
              </g>
              <defs>
                <clipPath id="clip0_107_2622">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span style={{
              marginLeft: '12px',
              color: selectedNav === 'Inspiration' ? '#FFFFFF' : '#A4A4B4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              fontWeight: 500
            }}>
              Inspiration
            </span>
          </div>
        </div>
      </div>

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
