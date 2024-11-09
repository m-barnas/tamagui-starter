import {Anchor, Button, Checkbox, Form, H2, Input, Label, Paragraph, ScrollView, XStack, YStack} from 'tamagui'
import {Check, CheckCircle, ExternalLink} from "@tamagui/lucide-icons";
import {BrandButton} from "../../components/BrandButton";

export default function TabTwoScreen() {
  const onSubmitHandler = () => {
    console.log(`Form submitted`);
  };

  return (
    <ScrollView bg="$background" px={'$4'}>
      <H2 color="$blue10">Tab Two</H2>

      <YStack gap="$4">
        <XStack justifyContent={'center'}>
          <YStack $gtLg={{ w: '400px' }} w={'100%'} gap={'$4'}>
            <Form onSubmit={onSubmitHandler}>
              <Label htmlFor={'name'} px={'$4'}>Name</Label>
              <Input id="name" defaultValue={'0'}/>

              <Checkbox size={'$5'} my={'$4'}>
                <Checkbox.Indicator>
                  <Check/>
                </Checkbox.Indicator>
              </Checkbox>

              <Form.Trigger asChild>
                <BrandButton icon={CheckCircle}>
                  <Button.Text>Submit</Button.Text>
                </BrandButton>
              </Form.Trigger>
            </Form>

            <Button br={'100px'}>
              Cancel
            </Button>

            <Button br={'100px'} variant={'outlined'}>
              Cancel
            </Button>

            {/*<Button br={'100px'} bg="$brand6" color="$brand11">*/}
            {/*  Cancel*/}
            {/*</Button>*/}
          </YStack>
        </XStack>

        <XStack ai="center" jc="center" fw="wrap" gap="$1.5" b="-200px" pos="absolute">
          <Paragraph fos="$5">Add</Paragraph>

          <Paragraph fos="$5" px="$2" py="$1" col="$brand10" bg="$brand5">
            tamagui.config.ts
          </Paragraph>

          <Paragraph fos="$5">to root and follow the</Paragraph>

          <XStack
              ai="center"
              gap="$1.5"
              px="$2"
              py="$1"
              br="$3"
              bg="$brand5"
              hoverStyle={{ bg: '$brand6' }}
              pressStyle={{ bg: '$brand4' }}
          >
            <Anchor
                href="https://tamagui.dev/docs/core/configuration"
                textDecorationLine="none"
                col="$brand10"
                fos="$5"
            >
              Configuration guide
            </Anchor>
            <ExternalLink size="$1" col="$brand10" />
          </XStack>

          <Paragraph fos="$5" ta="center">
            to configure your themes and tokens.
          </Paragraph>
        </XStack>
      </YStack>


      {/*<Theme name={'dark'}>*/}
      {/*  <Button m="$4" bg="$purple8" color="$purple12"*/}
      {/*          hoverStyle={{ bg: '$purple6' }}*/}
      {/*          pressStyle={{ bg: '$purple4' }}*/}
      {/*  >*/}
      {/*    Hello!*/}
      {/*  </Button>*/}
      {/*</Theme>*/}

      {/*<Theme name={'light'}>*/}
      {/*  <Button m="$4" bg="$purple8" color="$purple12"*/}
      {/*          hoverStyle={{ bg: '$purple6' }}*/}
      {/*          pressStyle={{ bg: '$purple4' }}*/}
      {/*  >*/}
      {/*    Hello!*/}
      {/*  </Button>*/}
      {/*</Theme>*/}

      {/*<Theme name={'dark'}>*/}
      {/*  <Button m="$4" bg="$brand8" color="$black0"*/}
      {/*          hoverStyle={{ bg: '$brand6' }}*/}
      {/*          pressStyle={{ bg: '$brand4' }}*/}
      {/*  >*/}
      {/*    Hello!*/}
      {/*  </Button>*/}
      {/*</Theme>*/}

      {/*<Theme name={'light'}>*/}
      {/*  <Button m="$4" bg="$brand8" color="$brand12"*/}
      {/*          hoverStyle={{ bg: '$brand6' }}*/}
      {/*          pressStyle={{ bg: '$brand4' }}*/}
      {/*  >*/}
      {/*    Hello!*/}
      {/*  </Button>*/}
      {/*</Theme>*/}

      {/*<Theme name={'light'}>*/}
      {/*  <YStack p={'$6'} bg={'$white1'}>*/}
      {/*    <Button m="$4" theme={'purple'}>*/}
      {/*      Themed light!*/}
      {/*    </Button>*/}
      {/*  </YStack>*/}
      {/*</Theme>*/}

      {/*<Theme name={'dark'}>*/}
      {/*  <Button m="$4" theme={'purple'}>*/}
      {/*    Themed dark!*/}
      {/*  </Button>*/}
      {/*</Theme>*/}

      {/*/!*<Button mt={'$5'} size={'$6'}>Hello World!</Button>*!/*/}

      {/*<Theme name={'dark'}>*/}
      {/*  <BrandButton m="$4">*/}
      {/*    <Button.Text>Brand Button!</Button.Text>*/}
      {/*  </BrandButton>*/}
      {/*</Theme>*/}

      {/*<Theme name={'light'}>*/}
      {/*  <YStack p={'$6'} bg={'$white1'}>*/}
      {/*    <BrandButton m="$4">*/}
      {/*      <Button.Text>Brand Button!</Button.Text>*/}
      {/*    </BrandButton>*/}
      {/*  </YStack>*/}
      {/*</Theme>*/}

    </ScrollView>
  )
}
