"use client";
import { useAuth } from "@/app/context/AuthProvider";
import withAuth from "@/app/hoc/withAuth";
import {
  Box,
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { useRouter } from "next/navigation";

import { useState } from "react";

const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const authState = useAuth();
  const router = useRouter();
  console.log({ authState, a: authState.users });

  const handleLogin = () => {
    if (inputValue.trim() === "") {
      alert("Please fill in the username.");
      return;
    }
    authState?.login?.(inputValue);
    setInputValue("");
    // router.push("/");
  };
  return (
    <main>
      <Box justifyContent="center" alignItems="center" p="$56">
        <VStack
          h={200}
          w={400}
          borderWidth={"$1"}
          borderColor="$trueGray300"
          justifyContent="center"
          space="md"
          p="$8"
        >
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            rounded={"$md"}
          >
            <InputField
              placeholder="Enter Username"
              value={inputValue}
              onChange={(e) => {
                console.log(e.nativeEvent.text);
                setInputValue(e.nativeEvent.text);
              }}
            />
          </Input>

          <Button
            bgColor="$black"
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            rounded={"$md"}
            onPress={handleLogin}
          >
            <ButtonText>Login </ButtonText>
          </Button>
        </VStack>
      </Box>
    </main>
  );
};

export default withAuth(LoginPage);
