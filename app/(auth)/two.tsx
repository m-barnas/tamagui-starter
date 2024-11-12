import {Button, Checkbox, Form, H2, Input, Label, ScrollView, Theme, XStack, YStack} from 'tamagui'
import {Check} from "@tamagui/lucide-icons";
import {BrandButton} from "../../components/BrandButton";
import React from "react";

export default function TabTwoScreen() {
  const onSubmitHandler = () => {
    console.log(`Form submitted`);
  };

  return (
    <ScrollView bg="$background" px={'$4'}>
      <H2 mb="$6">Tab Two</H2>

      <YStack gap="$4">
        <XStack justifyContent={'center'}>
          <YStack $gtLg={{ w: '400px' }} w={'100%'} gap={'$4'}>
            <Form onSubmit={onSubmitHandler}>
              <Label htmlFor={'name'} px={'$4'}>Name</Label>
              <Input id="name" placeholder={'Martin Barnas'}/>

              <Checkbox size={'$5'} my={'$4'}>
                <Checkbox.Indicator>
                  <Check/>
                </Checkbox.Indicator>
              </Checkbox>

              <Form.Trigger asChild>
                <Button themeInverse>
                  Submit
                </Button>
              </Form.Trigger>
            </Form>

            <Button variant={'outlined'}>
              Cancel
            </Button>

            <BrandButton>Brand</BrandButton>

          </YStack>
        </XStack>
      </YStack>

    </ScrollView>
  )
}
