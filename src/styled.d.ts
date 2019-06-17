// import original module declarations
import 'styled-components/macro'

// and extend them!
declare module 'styled-components/macro' {
  export interface DefaultTheme {
    breakpoints: string[]
    fontSizes: number[]
    colors: {
      blue: string
      lightblue: string
      darkgray: string
      gray: string
      lightgray: string
      white: string
    }
    space: number[]
    fonts: {
      sans: string
      mono: string
    }
    shadows: {
      small: string
      large: string
    }
    fontWeights: {
      light: string
      regular: string
      bold: string
    }
  }
}
