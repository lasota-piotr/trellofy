import React from 'react'
import { Normalize } from 'styled-normalize'
import { createGlobalStyle, css } from 'styled-components/macro'

const GlobalStyles = () => {
  return (
    <>
      <Normalize />
      <Global />
    </>
  )
}

const html = css`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

const body = css`
  body {
    font-family: ${p => p.theme.fonts.sans};
    font-size: 16px;
  }
`

const vendor = css`

  &[data-reach-dialog-overlay] {
    z-index: 1;
  }
`

const Global = createGlobalStyle`
  ${html};
  ${body};
  ${vendor};
`

export default GlobalStyles
