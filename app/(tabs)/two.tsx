import {Button, Text, View} from 'tamagui'

export default function TabTwoScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
      <Text fontSize={20} color="$blue10">
        Tab Two
      </Text>
      <Button mt={'$5'} size={'$6'}>Hello World!</Button>
      <Button mt={'$5'} size={'$5'}>Hello World !</Button>
    </View>
  )
}
