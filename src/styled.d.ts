// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[]
    fontSizes: number[]
    colors: {
      blue: string
      lightgray: string
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
  }
}
