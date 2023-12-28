import {
  Modal,
  ModalBackdrop,
  ModalHeader,
  ModalContent,
  HStack,
  Heading,
  Button,
  ButtonText,
  ModalBody,
  Input,
  FormControlError,
  Textarea,
  TextareaInput,
  FormControlErrorText,
  ModalFooter,
  Toast,
} from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";
import { FormControl } from "@gluestack-ui/themed";
import { Center } from "@gluestack-ui/themed";
import React, { useEffect } from "react";
import data from "../../utils/blogs.json";
import { useAuth } from "@/context/AuthProvider";
import { useToast } from "@gluestack-ui/themed";
import { ToastDescription } from "@gluestack-ui/themed";

const AddBlogModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { uploadBlog } = useAuth();
  const [isTitleValid, setIsTitleValid] = React.useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = React.useState(false);
  const [isImageValid, setIsImageValid] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const toast = useToast();
  const handleSubmit = () => {
    if (title && content && image) {
      const newAddBlog = {
        id: data.blogs.length + 1,
        profileImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS280A02yZt4POsUaiIhN4RTJwuaiA6NNhf0Q&usqp=CAU",
        name: "Kim Kelly Stamp in The Narrative Arc",
        date: new Date().toISOString(),
        heading: title,
        description: content,
        blogImage: image,
        tag: "Social Media",
        readTime: "8 min read",
      };
      uploadBlog?.(newAddBlog);
      toast.show({
        placement: "bottom left",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <Toast
              nativeID={toastId}
              action="attention"
              variant="solid"
              bgColor="$green500"
            >
              <ToastDescription color="$white">
                Blog added Successfully!!
              </ToastDescription>
            </Toast>
          );
        },
      });

      setShowModal(false);
    } else {
      setIsTitleValid(!title);
      setIsDescriptionValid(content.length < 20);
      setIsImageValid(!image);
    }
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
    if (e.target.value.length < 1) {
      setIsTitleValid(true);
    } else {
      setIsTitleValid(false);
    }
  };
  const handleContentChange = (e: any) => {
    setContent(e.target.value);
    if (e.target.value.length < 20) {
      setIsDescriptionValid(true);
    } else {
      setIsDescriptionValid(false);
    }
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.value);
    if (e.target.value.length < 1) {
      setIsImageValid(true);
    } else {
      setIsImageValid(false);
    }
  };
  useEffect(() => {
    setIsDescriptionValid(false);
    setIsImageValid(false);
    setIsTitleValid(false);
    setTitle("");
    setContent("");
    setImage("");
  }, [showModal]);
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <HStack w="$full" justifyContent="space-between">
              <Heading size="lg">Create Blog</Heading>
            </HStack>
          </ModalHeader>

          <ModalBody pb="$6">
            <FormControl isRequired={true} isInvalid={isTitleValid}>
              <Input borderWidth="$1" mt="$3">
                <InputField placeholder="Title" onChange={handleTitleChange} />
              </Input>
              {isTitleValid ? (
                <FormControlError>
                  <FormControlErrorText>
                    Title is required.
                  </FormControlErrorText>
                </FormControlError>
              ) : null}
            </FormControl>
            <FormControl isRequired={true} isInvalid={isDescriptionValid}>
              <Textarea borderWidth="$1" h="$80" mt="$3">
                <TextareaInput
                  placeholder="Tell your story..."
                  onChange={handleContentChange}
                />
              </Textarea>
              {isDescriptionValid ? (
                <FormControlError>
                  <FormControlErrorText>
                    More than 20 characters is required
                  </FormControlErrorText>
                </FormControlError>
              ) : null}
            </FormControl>

            <FormControl isRequired={false} isInvalid={isImageValid}>
              <Input borderWidth="$1" mt="$3" isRequired={true}>
                <InputField
                  placeholder="Paste image url"
                  onChange={handleImageChange}
                />
              </Input>
              {isImageValid ? (
                <FormControlError>
                  <FormControlErrorText>
                    Please provide image url
                  </FormControlErrorText>
                </FormControlError>
              ) : null}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                handleSubmit();
              }}
              isDisabled={isTitleValid || isDescriptionValid || isImageValid}
            >
              <ButtonText fontWeight="$normal">Publish</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default AddBlogModal;
