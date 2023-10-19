import React from 'react'

const TextContext = React.createContext({
  isBold: false,
  isItalic: false,
  isDecorate: false,
  toggleBold: () => {},
  toggleItalic: () => {},
  toggleDecorate: () => {},
})
export default TextContext
