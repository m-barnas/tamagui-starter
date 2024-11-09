import { config as configBase } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'
import Colors, {brand} from "./constants/Colors";

const customColors = {
  color: {
    ...configBase.tokens.color,
    ...brand,  // Add the brand palette to the base tokens
  }
};

export const config = createTamagui({
  ...configBase,
  themes: {
    ...configBase.themes,
    light: {
      ...configBase.themes.light,
      ...Colors.light, // Add brand colors to light theme
    },
    dark: {
      ...configBase.themes.dark,
      ...Colors.dark, // Add brand colors to dark theme
    },
  },
  tokens: {
    ...configBase.tokens,
    ...customColors, // Include brand color tokens
  },
});

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
