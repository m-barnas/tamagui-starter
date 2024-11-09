import {styled,} from '@tamagui/web'
import {Button} from "tamagui";

export const BrandButton = styled(Button, {
  name: 'BrandButton',
  backgroundColor: '$brandBackground',
  color: '$brandColor',
  borderColor: '$brandBorder',
  borderRadius: '100px',

  hoverStyle: {
    backgroundColor: '$brandBackgroundHover',
    borderColor: '$brandBorderHover',
  },

  pressStyle: {
    backgroundColor: '$brandBackgroundPressed',
    borderColor: '$brandBorderPressed',
  },
})