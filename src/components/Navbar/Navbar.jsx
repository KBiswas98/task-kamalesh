import React from 'react'
import styled from 'styled-components'

export default function Navbar({ children }) {

  const reset = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <HorizontalCenter>
        <AppIconHolder>
          <AppIcon src="assets/fampaylogo.png"/>
        </AppIconHolder>
      <AppContent>
        {children}
      </AppContent>
      <Reset onClick={() => reset()}>
        reset
      </Reset>
    </HorizontalCenter>
  )
}

const Reset = styled.button`
  position: absolute;
  right: 20px;
  top: 25px;
  background: transparent;
  border: 0px;
  opacity: 0.5;
`

const HorizontalCenter = styled.section`
  position: relative;
  margin: -10px;
`

const AppIcon = styled.img`
  height: 1.5rem;
  width: 5.4375rem;
  margin: 20px 0px;
`

const AppIconHolder = styled.div`
 display: table;
  margin: 0 auto;
`

const AppContent = styled.div`
  background: #F7F6F3;
  border-radius: 12px 12px 0px 0px;
  min-height: 100vh;
  padding: 20px;
`