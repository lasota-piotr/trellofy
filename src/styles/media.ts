import theme from './theme'

const size = {
  mobile: theme.breakpoints[0],
  tablet: theme.breakpoints[1],
  desktop: theme.breakpoints[2],
}

const media = Object.keys(size).reduce((acc: any, key: any) => {
  acc[key] = (style: any) => `
  // @ts-ignore
    @media (min-width: ${size[key]}) {
      ${style};
    }
  `
  return acc
}, {})

export default media
