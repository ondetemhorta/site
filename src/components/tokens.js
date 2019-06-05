import { linearGradient, rem } from 'polished'

const colors = {
  white: '#fff',
  black: '#2f323b',
  gray: '#4f5156',
  apple: '#4dc7a6',
  conifer: '#c0fb80'
}

const gradients = {
  default: linearGradient({
    colorStops: [`${colors.apple} 0%`, `${colors.conifer} 100%`],
    toDirection: '350deg'
  })
}

export const tokens = {
  colors,
  gradients,
  font: {
    size: {
      eighteen: rem('18px'),
      fiftyFour: rem('54px')
    }
  },
  zindex: {
    above: 9000
  },
  weight: {
    light: 300,
    regular: 400,
    bold: 700
  },
  border: {
    circle: rem('25px')
  }
}
