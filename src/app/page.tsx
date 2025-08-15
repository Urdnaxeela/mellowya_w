'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedNav, setSelectedNav] = useState('Home')
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
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
            onMouseEnter={() => setHoveredNav('Home')}
            onMouseLeave={() => setHoveredNav(null)}
            className="nav-item"
            style={{
              width: '100%',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: selectedNav === 'Home' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
              border: selectedNav === 'Home' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
              <g clipPath="url(#clip0_107_2615)">
                <path d="M13 12.2381V5.7619C13 5.64362 12.9729 5.52697 12.9208 5.42117C12.8687 5.31538 12.7931 5.22335 12.7 5.15238L7.45 1.15238C7.32018 1.05347 7.16228 1 7 1C6.83772 1 6.67982 1.05347 6.55 1.15238L1.3 5.15238C1.20685 5.22335 1.13125 5.31538 1.07918 5.42117C1.02711 5.52697 1 5.64362 1 5.7619V12.2381C1 12.4402 1.07902 12.634 1.21967 12.7768C1.36032 12.9197 1.55109 13 1.75 13H4.75C4.94891 13 5.13968 12.9197 5.28033 12.7768C5.42098 12.634 5.5 12.4402 5.5 12.2381V9.95238C5.5 9.75031 5.57902 9.55652 5.71967 9.41363C5.86032 9.27075 6.05109 9.19048 6.25 9.19048H7.75C7.94891 9.19048 8.13968 9.27075 8.28033 9.41363C8.42098 9.55652 8.5 9.75031 8.5 9.95238V12.2381C8.5 12.4402 8.57902 12.634 8.71967 12.7768C8.86032 12.9197 9.05109 13 9.25 13H12.25C12.4489 13 12.6397 12.9197 12.7803 12.7768C12.921 12.634 13 12.4402 13 12.2381Z" stroke={selectedNav === 'Home' || hoveredNav === 'Home' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_107_2615">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span style={{
              marginLeft: '12px',
              color: selectedNav === 'Home' || hoveredNav === 'Home' ? '#FFFFFF' : '#A4A4B4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              Home
            </span>
          </div>

          {/* All Songs */}
          <div 
            onClick={() => setSelectedNav('All songs')}
            onMouseEnter={() => setHoveredNav('All songs')}
            onMouseLeave={() => setHoveredNav(null)}
            className="nav-item"
            style={{
              width: '100%',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: selectedNav === 'All songs' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
              border: selectedNav === 'All songs' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
              <g clipPath="url(#clip0_107_2616)">
                <path d="M0.5 5.14307H13.5M12.3393 12.1074H1.66071C1.35287 12.1074 1.05764 11.9851 0.839965 11.7674C0.622289 11.5497 0.5 11.2545 0.5 10.9466V3.05378C0.5 2.74594 0.622289 2.45071 0.839965 2.23303C1.05764 2.01536 1.35287 1.89307 1.66071 1.89307H3.86288C4.09206 1.89307 4.31611 1.96092 4.50679 2.08807L5.31464 2.62664C5.50532 2.75378 5.72937 2.82163 5.95855 2.82164H12.3393C12.6471 2.82164 12.9424 2.94393 13.16 3.1616C13.3777 3.37928 13.5 3.67451 13.5 3.98235V10.9466C13.5 11.2545 13.3777 11.5497 13.16 11.7674C12.9424 11.9851 12.6471 12.1074 12.3393 12.1074Z" stroke={selectedNav === 'All songs' || hoveredNav === 'All songs' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_107_2616">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span style={{
              marginLeft: '12px',
              color: selectedNav === 'All songs' || hoveredNav === 'All songs' ? '#FFFFFF' : '#A4A4B4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              All songs
            </span>
          </div>

          {/* Inspiration */}
          <div 
            onClick={() => setSelectedNav('Inspiration')}
            onMouseEnter={() => setHoveredNav('Inspiration')}
            onMouseLeave={() => setHoveredNav(null)}
            className="nav-item"
            style={{
              width: '100%',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: selectedNav === 'Inspiration' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
              border: selectedNav === 'Inspiration' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '12px',
              paddingRight: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
              <g clipPath="url(#clip0_107_2622)">
                <path d="M1.86842 13.5C1.4921 13.5 1.17007 13.3703 0.902316 13.1109C0.634561 12.8514 0.500456 12.5392 0.5 12.1741V3.97042C0.5 3.6942 0.577088 3.44295 0.731263 3.21667C0.885439 2.99039 1.09344 2.82731 1.35526 2.72743L6.82895 0.606068C7.28509 0.429288 7.71272 0.473483 8.11184 0.738654C8.51096 1.00382 8.71052 1.37396 8.71052 1.84906V2.89317C9.08684 2.89317 9.4091 3.0231 9.67731 3.28297C9.94552 3.54283 10.0794 3.85485 10.0789 4.21902V4.88195C10.0789 5.06977 10.0133 5.22733 9.88189 5.35461C9.75052 5.48189 9.58814 5.54531 9.39473 5.54487C9.20133 5.54443 9.03894 5.48079 8.90758 5.35395C8.77621 5.22711 8.71052 5.06977 8.71052 4.88195V4.21902H1.86842V12.1741H4.725C4.91886 12.1741 5.08147 12.2378 5.21284 12.3651C5.34421 12.4923 5.40967 12.6497 5.40921 12.8371C5.40875 13.0245 5.34307 13.182 5.21216 13.3097C5.08124 13.4375 4.91886 13.5009 4.725 13.5H1.86842ZM4.60526 2.89317H7.3421V1.86563L4.60526 2.89317ZM10.0789 13.5C9.13245 13.5 8.32577 13.1767 7.65889 12.5301C6.99202 11.8836 6.65835 11.102 6.65789 10.1854C6.65744 9.26875 6.9911 8.48716 7.65889 7.84059C8.32668 7.19401 9.13337 6.87072 10.0789 6.87072C11.0245 6.87072 11.8314 7.19401 12.4997 7.84059C13.1679 8.48716 13.5014 9.26875 13.5 10.1854C13.4986 11.102 13.165 11.8838 12.499 12.5308C11.833 13.1778 11.0263 13.5009 10.0789 13.5ZM9.75394 11.5278L11.4987 10.4671C11.6127 10.4008 11.6697 10.3069 11.6697 10.1854C11.6697 10.0638 11.6127 9.96991 11.4987 9.90361L9.75394 8.84293C9.63991 8.77664 9.52291 8.77377 9.40294 8.83431C9.28298 8.89486 9.22323 8.99165 9.22368 9.12467V11.246C9.22368 11.3786 9.28366 11.4754 9.40363 11.5364C9.52359 11.5974 9.64037 11.5945 9.75394 11.5278Z" fill={selectedNav === 'Inspiration' || hoveredNav === 'Inspiration' ? '#AB9EFF' : '#A4A4B4'}/>
              </g>
              <defs>
                <clipPath id="clip0_107_2622">
                  <rect width="14" height="14" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span style={{
              marginLeft: '12px',
              color: selectedNav === 'Inspiration' || hoveredNav === 'Inspiration' ? '#FFFFFF' : '#A4A4B4',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              transition: 'color 0.3s ease'
            }}>
              Inspiration
            </span>
          </div>
        </div>

        {/* Playground Section */}
        <div style={{ marginTop: '24px' }}>
          <div style={{
            color: '#6F6F85',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: '15px',
            fontWeight: 400,
            paddingLeft: '12px'
          }}>
            Playground
          </div>
          
          <div style={{
            marginTop: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            {/* Generate Music */}
            <div 
              onClick={() => setSelectedNav('Generate music')}
              onMouseEnter={() => setHoveredNav('Generate music')}
              onMouseLeave={() => setHoveredNav(null)}
              className="nav-item"
              style={{
                width: '100%',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: selectedNav === 'Generate music' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
                border: selectedNav === 'Generate music' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '12px',
                paddingRight: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
                <g clipPath="url(#clip0_107_2624)">
                  <path d="M4.95072 12.8024C5.31475 12.8024 5.66388 12.6578 5.92129 12.4004C6.1787 12.143 6.32331 11.7939 6.32331 11.4298C6.32331 11.0658 6.1787 10.7167 5.92129 10.4592C5.66388 10.2018 5.31475 10.0572 4.95072 10.0572C4.58668 10.0572 4.23756 10.2018 3.98015 10.4592C3.72274 10.7167 3.57813 11.0658 3.57812 11.4298C3.57813 11.7939 3.72274 12.143 3.98015 12.4004C4.23756 12.6578 4.58668 12.8024 4.95072 12.8024ZM11.1276 11.0866C11.4915 11.0866 11.8405 10.942 12.0979 10.6847C12.3552 10.4273 12.4998 10.0783 12.4998 9.71442C12.4998 9.35051 12.3552 9.0015 12.0979 8.74417C11.8405 8.48685 11.4915 8.34229 11.1276 8.34229C10.7637 8.34229 10.4147 8.48685 10.1574 8.74417C9.90005 9.0015 9.75549 9.35051 9.75549 9.71442C9.75549 10.0783 9.90005 10.4273 10.1574 10.6847C10.4147 10.942 10.7637 11.0866 11.1276 11.0866Z" stroke={selectedNav === 'Generate music' || hoveredNav === 'Generate music' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 9.71471V4.33433C12.4997 4.2818 12.4874 4.23003 12.4639 4.18303C12.4405 4.13603 12.4065 4.09505 12.3647 4.06325C12.3229 4.03145 12.2744 4.00968 12.2228 3.99963C12.1712 3.98957 12.1181 3.9915 12.0674 4.00527L9.32218 4.76696M12.5 5.94019L7.50092 7.32883M6.32401 11.4297V8.64505M2.53941 6.56531V8.64413M1.5 7.60472H3.57883M5.06462 2.87511C5.4725 2.32424 5.72365 1.19775 5.72365 1.19775C5.72365 1.19775 5.97479 2.32424 6.38176 2.87511C6.79331 3.43057 8.10312 3.91636 8.10312 3.91636C8.10312 3.91636 6.79239 4.40215 6.38176 4.95852C5.97479 5.50848 5.72365 6.63497 5.72365 6.63497C5.72365 6.63497 5.4725 5.50939 5.06462 4.95761C4.65399 4.40307 3.34418 3.91636 3.34418 3.91636C3.34418 3.91636 4.65399 3.43057 5.06462 2.87511Z" stroke={selectedNav === 'Generate music' || hoveredNav === 'Generate music' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_107_2624">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span style={{
                marginLeft: '12px',
                color: selectedNav === 'Generate music' || hoveredNav === 'Generate music' ? '#FFFFFF' : '#A4A4B4',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}>
                Generate music
              </span>
            </div>

            {/* Sound Effects */}
            <div 
              onClick={() => setSelectedNav('Sound effects')}
              onMouseEnter={() => setHoveredNav('Sound effects')}
              onMouseLeave={() => setHoveredNav(null)}
              className="nav-item"
              style={{
                width: '100%',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: selectedNav === 'Sound effects' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
                border: selectedNav === 'Sound effects' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '12px',
                paddingRight: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
                <path d="M3.66667 1.4C3.66667 1.03133 3.368 1 3 1C2.63133 1 2.33333 1.03133 2.33333 1.4V7H3.66667V1.4ZM2.33333 12.6C2.33333 12.9673 2.63133 13 3 13C3.36867 13 3.66667 12.9673 3.66667 12.6V10.3333H2.33333V12.6ZM4.59933 7.66667H1.39933C1.03067 7.66667 1 7.96533 1 8.33333V9C1 9.36867 1.03067 9.66667 1.39933 9.66667H4.6C4.96667 9.66667 5 9.36867 5 9V8.33333C5 7.96533 4.96667 7.66667 4.59933 7.66667ZM12.5993 8.33333H9.39867C9.03067 8.33333 9 8.632 9 9V9.66667C9 10.0353 9.03067 10.3333 9.39933 10.3333H12.6C12.9667 10.3333 13 10.0353 13 9.66667V9C13 8.632 12.9667 8.33333 12.5993 8.33333ZM9 5C9 4.632 8.96667 4.33333 8.59933 4.33333H5.39933C5.03067 4.33333 5 4.632 5 5V5.66667C5 6.03533 5.03067 6.33333 5.39933 6.33333H8.6C8.96667 6.33333 9 6.03533 9 5.66667V5ZM7.66667 1.4C7.66667 1.03133 7.368 1 7 1C6.63133 1 6.33333 1.03133 6.33333 1.4V3.66667H7.66667V1.4ZM6.33333 12.6C6.33333 12.9673 6.63133 13 7 13C7.36867 13 7.66667 12.9673 7.66667 12.6V7H6.33333V12.6ZM11.6667 1.4C11.6667 1.03133 11.368 1 11 1C10.6313 1 10.3333 1.03133 10.3333 1.4V7.66667H11.6667V1.4ZM10.3333 12.6C10.3333 12.9673 10.6313 13 11 13C11.3687 13 11.6667 12.9673 11.6667 12.6V11H10.3333V12.6Z" fill={selectedNav === 'Sound effects' || hoveredNav === 'Sound effects' ? '#AB9EFF' : '#A4A4B4'}/>
              </svg>
              <span style={{
                marginLeft: '12px',
                color: selectedNav === 'Sound effects' || hoveredNav === 'Sound effects' ? '#FFFFFF' : '#A4A4B4',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}>
                Sound effects
              </span>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div style={{ marginTop: '24px' }}>
          <div style={{
            color: '#6F6F85',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: '15px',
            fontWeight: 400,
            paddingLeft: '12px'
          }}>
            Community
          </div>
          
          <div style={{
            marginTop: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            {/* Discord */}
            <div 
              onClick={() => setSelectedNav('Discord')}
              onMouseEnter={() => setHoveredNav('Discord')}
              onMouseLeave={() => setHoveredNav(null)}
              className="nav-item"
              style={{
                width: '100%',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: selectedNav === 'Discord' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
                border: selectedNav === 'Discord' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '12px',
                paddingRight: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
                <g clipPath="url(#clip0_107_2628)">
                  <path d="M2.77148 9.75879C6.0169 11.3815 7.96415 11.3815 11.2096 9.75879" stroke={selectedNav === 'Discord' || hoveredNav === 'Discord' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.263 10.7323L9.91208 12.0305C9.91208 12.0305 12.6194 11.1685 13.482 9.75872C13.482 9.10964 13.8261 4.47064 11.5348 2.94335C10.5612 2.29427 8.93846 1.96973 8.93846 1.96973L8.28938 3.26789H6.99121" stroke={selectedNav === 'Discord' || hoveredNav === 'Discord' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.73738 10.7323L4.0883 12.0305C4.0883 12.0305 1.38098 11.1685 0.518347 9.75872C0.518347 9.10964 0.174333 4.47064 2.46559 2.94335C3.43922 2.29427 5.06193 1.96973 5.06193 1.96973L5.71101 3.26789H7.00917" stroke={selectedNav === 'Discord' || hoveredNav === 'Discord' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.71874 8.46059C4.1813 8.46059 3.74512 7.87966 3.74512 7.16242C3.74512 6.44519 4.1813 5.86426 4.71874 5.86426C5.25618 5.86426 5.69236 6.44519 5.69236 7.16242C5.69236 7.87966 5.25618 8.46059 4.71874 8.46059ZM9.26232 8.46059C8.72488 8.46059 8.2887 7.87966 8.2887 7.16242C8.2887 6.44519 8.72488 5.86426 9.26232 5.86426C9.79976 5.86426 10.2359 6.44519 10.2359 7.16242C10.2359 7.87966 9.79976 8.46059 9.26232 8.46059Z" stroke={selectedNav === 'Discord' || hoveredNav === 'Discord' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_107_2628">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span style={{
                marginLeft: '12px',
                color: selectedNav === 'Discord' || hoveredNav === 'Discord' ? '#FFFFFF' : '#A4A4B4',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}>
                Discord
              </span>
            </div>

            {/* Contact Support */}
            <div 
              onClick={() => setSelectedNav('Contact support')}
              onMouseEnter={() => setHoveredNav('Contact support')}
              onMouseLeave={() => setHoveredNav(null)}
              className="nav-item"
              style={{
                width: '100%',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: selectedNav === 'Contact support' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
                border: selectedNav === 'Contact support' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '12px',
                paddingRight: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
                <g clipPath="url(#clip0_107_2629)">
                  <path d="M7.31579 10.3333L4.15789 12.3333V10.3333H2.89474C2.39222 10.3333 1.91029 10.1226 1.55496 9.74755C1.19962 9.37247 1 8.86377 1 8.33333V3C1 2.46957 1.19962 1.96086 1.55496 1.58579C1.91029 1.21071 2.39222 1 2.89474 1H10.4737C10.9762 1 11.4581 1.21071 11.8135 1.58579C12.1688 1.96086 12.3684 2.46957 12.3684 3V6M13 13C13 12.6464 12.8669 12.3072 12.63 12.0572C12.3931 11.8071 12.0719 11.6667 11.7368 11.6667H10.4737C10.1387 11.6667 9.81738 11.8071 9.5805 12.0572C9.34361 12.3072 9.21053 12.6464 9.21053 13M9.8421 9.66667C9.8421 10.0203 9.97519 10.3594 10.2121 10.6095C10.449 10.8595 10.7703 11 11.1053 11C11.4403 11 11.7616 10.8595 11.9984 10.6095C12.2353 10.3594 12.3684 10.0203 12.3684 9.66667C12.3684 9.31304 12.2353 8.97391 11.9984 8.72386C11.7616 8.47381 11.4403 8.33333 11.1053 8.33333C10.7703 8.33333 10.449 8.47381 10.2121 8.72386C9.97519 8.97391 9.8421 9.31304 9.8421 9.66667Z" stroke={selectedNav === 'Contact support' || hoveredNav === 'Contact support' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_107_2629">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span style={{
                marginLeft: '12px',
                color: selectedNav === 'Contact support' || hoveredNav === 'Contact support' ? '#FFFFFF' : '#A4A4B4',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}>
                Contact support
              </span>
            </div>

            {/* Share Feedback */}
            <div 
              onClick={() => setSelectedNav('Share feedback')}
              onMouseEnter={() => setHoveredNav('Share feedback')}
              onMouseLeave={() => setHoveredNav(null)}
              className="nav-item"
              style={{
                width: '100%',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: selectedNav === 'Share feedback' ? 'rgba(197, 188, 255, 0.16)' : 'transparent',
                border: selectedNav === 'Share feedback' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '12px',
                paddingRight: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'all 0.3s ease' }}>
                <g clipPath="url(#clip0_107_2630)">
                  <path d="M6.39998 1C3.96666 1.00467 2.69333 1.064 1.87866 1.87866C1 2.75733 1 4.17132 1 6.99998C1 9.82864 1 11.2426 1.87866 12.1213C2.75733 13 4.17199 13 6.99998 13C9.82797 13 11.2426 13 12.122 12.1213C12.9353 11.3073 12.9953 10.0326 13 7.59998" stroke={selectedNav === 'Share feedback' || hoveredNav === 'Share feedback' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.0006 3.01666L12.334 3.01533C9.84264 3.00866 8.59731 3.00533 7.72198 3.63532C7.43065 3.84399 7.17531 4.09866 6.96532 4.38866C6.33398 5.26399 6.33398 6.50932 6.33398 8.99997M13.0006 3.01666C13.0021 2.90093 12.9605 2.78879 12.884 2.70199C12.374 2.098 11.048 1 11.048 1M13.0006 3.01666C12.9945 3.12076 12.9536 3.21981 12.8846 3.29799C12.374 3.90199 11.0473 4.99999 11.0473 4.99999" stroke={selectedNav === 'Share feedback' || hoveredNav === 'Share feedback' ? '#AB9EFF' : '#A4A4B4'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_107_2630">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <span style={{
                marginLeft: '12px',
                color: selectedNav === 'Share feedback' || hoveredNav === 'Share feedback' ? '#FFFFFF' : '#A4A4B4',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'color 0.3s ease'
              }}>
                Share feedback
              </span>
            </div>
          </div>
        </div>

        {/* Promotional Card */}
        <div style={{
          position: 'absolute',
          bottom: '78px', // 26px (bottom margin) + 32px (user profile stack height) + 36px (gap)
          left: '20px',
          right: '0px',
          width: 'calc(100% - 20px)',
          height: '152px',
          borderRadius: '8px',
          background: 'radial-gradient(ellipse at top right, #3C3C6C 0%, #19192D 50%, #12121D 100%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '22px 20px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'scale(1)'
        }}
        className="promo-card">
          {/* Animated Pixels/Sparkles */}
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '2px',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            animation: 'sparkle1 3s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '25%',
            right: '20%',
            width: '1px',
            height: '1px',
            background: 'rgba(167, 153, 255, 0.9)',
            borderRadius: '50%',
            animation: 'sparkle2 4s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '30%',
            left: '25%',
            width: '1.5px',
            height: '1.5px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            animation: 'sparkle3 2.5s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '2px',
            height: '2px',
            background: 'rgba(167, 153, 255, 0.7)',
            borderRadius: '50%',
            animation: 'sparkle1 3.5s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '35%',
            width: '1px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            animation: 'sparkle2 2.8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '60%',
            width: '1.5px',
            height: '1.5px',
            background: 'rgba(167, 153, 255, 0.8)',
            borderRadius: '50%',
            animation: 'sparkle3 4.2s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '70%',
            width: '1px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '50%',
            animation: 'sparkle1 2.3s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '40%',
            left: '45%',
            width: '2px',
            height: '2px',
            background: 'rgba(167, 153, 255, 0.6)',
            borderRadius: '50%',
            animation: 'sparkle2 3.7s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '80%',
            left: '35%',
            width: '1px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            animation: 'sparkle3 3.1s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '35%',
            right: '25%',
            width: '1.5px',
            height: '1.5px',
            background: 'rgba(167, 153, 255, 0.9)',
            borderRadius: '50%',
            animation: 'sparkle1 4.5s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '55%',
            width: '1px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            animation: 'sparkle2 2.9s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '55%',
            left: '80%',
            width: '2px',
            height: '2px',
            background: 'rgba(167, 153, 255, 0.5)',
            borderRadius: '50%',
            animation: 'sparkle3 3.8s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '50%',
            right: '40%',
            width: '1px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            animation: 'sparkle1 2.7s ease-in-out infinite'
          }} />
          
          <style jsx>{`
            @keyframes sparkle1 {
              0%, 100% { opacity: 0.2; transform: scale(0.8); }
              50% { opacity: 1; transform: scale(1.2); }
            }
            @keyframes sparkle2 {
              0%, 100% { opacity: 0.1; transform: scale(0.6) translateY(0px); }
              33% { opacity: 0.8; transform: scale(1) translateY(-2px); }
              66% { opacity: 0.4; transform: scale(1.1) translateY(1px); }
            }
            @keyframes sparkle3 {
              0%, 100% { opacity: 0.3; transform: scale(0.9) rotate(0deg); }
              25% { opacity: 0.9; transform: scale(1.3) rotate(90deg); }
              75% { opacity: 0.6; transform: scale(1.1) rotate(180deg); }
            }
            @keyframes strokePulse {
              0%, 100% { 
                border-color: rgba(167, 153, 255, 0.4);
                box-shadow: 0 0 15px 0 rgba(167, 153, 255, 0.2);
              }
              50% { 
                border-color: rgba(167, 153, 255, 0.8);
                box-shadow: 0 0 25px 0 rgba(167, 153, 255, 0.4);
              }
            }
            .promo-card:hover {
              transform: scale(0.7);
              border-color: rgba(167, 153, 255, 0.6);
              box-shadow: 0 0 20px 0 rgba(167, 153, 255, 0.3);
              animation: strokePulse 2.5s ease-in-out infinite;
            }
            .promo-card:active {
              transform: scale(0.94);
              border-color: rgba(167, 153, 255, 0.9);
              box-shadow: 0 0 30px 0 rgba(167, 153, 255, 0.5);
            }
            .nav-item:hover svg path {
              stroke: #AB9EFF !important;
              fill: #AB9EFF !important;
            }
            .nav-item:hover svg g path {
              stroke: #AB9EFF !important;
              fill: #AB9EFF !important;
            }
            .nav-item:hover span {
              color: #FFFFFF !important;
            }
          `}</style>
          <Image
            src="/images/gift.png"
            alt="Gift"
            width={24}
            height={24}
          />
          <div style={{
            marginTop: '12px',
            lineHeight: '1.2'
          }}>
            <div style={{
              color: '#A799FF',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              display: 'inline'
            }}>
              Earn 30%
            </div>
            <span style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '18px',
              fontWeight: 500
            }}>
              {' '}for every
            </span>
            <br />
            <span style={{
              color: '#FFFFFF',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '18px',
              fontWeight: 500
            }}>
              purchase you refer
            </span>
          </div>
          <div style={{
            position: 'absolute',
            bottom: '22px',
            left: '20px',
            color: 'rgba(164, 164, 180, 0.5)',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: '13px',
            fontWeight: 400
          }}>
            Join our affiliate program
          </div>
        </div>

        {/* User Profile Section */}
        <div style={{
          position: 'absolute',
          bottom: '26px',
          left: '20px',
          right: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Image
              src="/images/persona.png"
              alt="Alex Malenchi"
              width={32}
              height={32}
              style={{
                borderRadius: '50%'
              }}
            />
            <span style={{
              marginLeft: '6px',
              color: '#FFFFFF',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              fontSize: '15px',
              fontWeight: 400
            }}>
              Alex Malenchi
            </span>
          </div>
          
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}>
            <g clipPath="url(#clip0_108_2634)">
              <path d="M1.97727 13.5C1.57102 13.5 1.22337 13.3587 0.934318 13.076C0.645265 12.7934 0.500492 12.4533 0.5 12.0555V1.94444C0.5 1.54722 0.644773 1.2073 0.934318 0.924666C1.22386 0.642037 1.57152 0.500481 1.97727 0.5H6.40909C6.61837 0.5 6.79392 0.569333 6.93574 0.708C7.07756 0.846666 7.14822 1.01807 7.14773 1.22222C7.14724 1.42637 7.07633 1.59802 6.935 1.73717C6.79367 1.87631 6.61837 1.94541 6.40909 1.94444H1.97727V12.0555H6.40909C6.61837 12.0555 6.79392 12.1249 6.93574 12.2635C7.07756 12.4022 7.14822 12.5736 7.14773 12.7778C7.14724 12.9819 7.07633 13.1536 6.935 13.2927C6.79367 13.4319 6.61837 13.501 6.40909 13.5H1.97727ZM10.9702 7.72222H5.67045C5.46117 7.72222 5.28587 7.65288 5.14455 7.51422C5.00322 7.37555 4.93231 7.20414 4.93182 7C4.93133 6.79585 5.00223 6.62444 5.14455 6.48577C5.28686 6.34711 5.46216 6.27777 5.67045 6.27777H10.9702L9.58523 4.92361C9.44981 4.7912 9.3821 4.6287 9.3821 4.43611C9.3821 4.24352 9.44981 4.075 9.58523 3.93055C9.72064 3.78611 9.89299 3.71076 10.1023 3.7045C10.3116 3.69824 10.4901 3.76757 10.6378 3.9125L13.2784 6.49444C13.4261 6.63888 13.5 6.8074 13.5 7C13.5 7.19259 13.4261 7.36111 13.2784 7.50555L10.6378 10.0875C10.4901 10.2319 10.3148 10.3013 10.1119 10.2955C9.909 10.2897 9.73345 10.2144 9.58523 10.0694C9.44981 9.92499 9.3853 9.75359 9.3917 9.55522C9.39811 9.35685 9.46877 9.19122 9.60369 9.05833L10.9702 7.72222Z" fill="#6F6F85"/>
            </g>
            <defs>
              <clipPath id="clip0_108_2634">
                <rect width="14" height="14" fill="white"/>
              </clipPath>
            </defs>
          </svg>
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
