import {Button, Form, Input, Label, Spinner, Text, View, XStack, YStack} from 'tamagui'
import React, {useState} from "react";
import {supabase} from "../utils/supabase";
import {Alert} from "react-native";
import {useRouter} from "expo-router";

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const router = useRouter();

  const onSignInHandler = async () => {
    console.log(`Sign in with email: ${email} and password: ${password}`);
    setLoadingMessage('Signing In...');

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({email, password});
    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
    router.replace('/(auth)');
  }

  const onSignUpHandler = async () => {
    console.log(`Sign up with email: ${email} and password: ${password}`);
    setLoadingMessage('Signing Up...');

    setLoading(true);
    const { error } = await supabase.auth.signUp({email, password});
    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
    router.replace('/(auth)');
  }

  return (
      <View bg="$background">
        <XStack justifyContent={'center'} h={'100%'}>
          <YStack justifyContent={'center'} $gtLg={{ maxWidth: '400px' }} w={'100%'} h={'100%'} gap={'$4'} p={"$4"} maxWidth={"350px"}>
            <Form onSubmit={onSignInHandler}>

              <Label htmlFor={'email'}>Email</Label>
              <Input id="email"
                     value={email}
                     onChangeText={setEmail}
                     inputMode={"email"}
                     placeholder={'Enter your email'}
              />

              <Label htmlFor={'password'}>Password</Label>
              <Input id="password"
                     value={password}
                     onChangeText={setPassword}
                     secureTextEntry
                     placeholder={'Enter your password'}
              />

              <Form.Trigger asChild mt="$4">
                <Button themeInverse>
                  Sign In
                </Button>
              </Form.Trigger>
            </Form>

            <Button variant={'outlined'} onPress={onSignUpHandler}>
              Sign Up
            </Button>
          </YStack>
        </XStack>

        {loading && (
            <View w={'100%'} h={"100%"} bg="$background" justifyContent={"center"} alignItems={"center"} pos={"absolute"}>
              <YStack gap={"$4"}>
                <Spinner/>
                <Text>{loadingMessage}</Text>
              </YStack>
            </View>
        )}
      </View>
  )
}
export default Page;