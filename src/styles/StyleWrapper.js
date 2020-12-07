import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'

export default function StyleWrapper({ children }) {
  return (
    <Router>
      <GlobalStyle />
      {children}
    </Router>
  )
}
