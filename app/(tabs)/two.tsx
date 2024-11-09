import {Button, Text, View} from 'tamagui'

export default function TabTwoScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
      <Text fontSize={20} color="$blue10">
        Tab Two
      </Text>
      <Button mt={20}>Hello World!</Button>
    </View>
  )
}
