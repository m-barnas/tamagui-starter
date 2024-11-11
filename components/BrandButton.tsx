import {styled,} from '@tamagui/web'
import {Button} from "tamagui";

export const BrandButton = styled(Button, {
  name: 'BrandButton',
  backgroundColor: '$brandBackground',
  color: '$brandColor',
  borderColor: '$brandBorder',
  cursor: 'pointer',

  hoverStyle: {
    backgroundColor: '$brandBackgroundHover',
    borderColor: '$brandBorderHover',
  },

  pressStyle: {
    backgroundColor: '$brandBackgroundPressed',
    borderColor: '$brandBorderPressed',
  },
})