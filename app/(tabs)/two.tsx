import {Button, Checkbox, Form, H2, Input, Label, Text, View} from 'tamagui'
import {Check, CheckCircle} from "@tamagui/lucide-icons";

export default function TabTwoScreen() {
  const onSubmitHandler = () => {
    console.log(`Form submitted`);
  };

  return (
    <View bg="$background" px={'$2'}>
      <H2 color="$blue10">Tab Two</H2>

      <Form onSubmit={onSubmitHandler}>
        <Label htmlFor={'name'} px={'$4'}>Name</Label>
        <Input id="name" defaultValue={'0'}/>

        <Checkbox size={'$5'} my={'$4'}>
          <Checkbox.Indicator>
            <Check/>
          </Checkbox.Indicator>
        </Checkbox>

        <Form.Trigger asChild>
          <Button icon={CheckCircle}>
            Submit
          </Button>
        </Form.Trigger>
      </Form>

      <Button mt={'$5'} size={'$6'}>Hello World!</Button>
    </View>
  )
}
