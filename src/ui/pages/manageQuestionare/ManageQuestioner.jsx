import React, { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Button,
  useDisclosure,
  useBoolean,
  TableContainer,
  useToast,
  HStack,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { FiCheckCircle, FiPlusCircle } from "react-icons/fi";
import SideBar from "../../components/SideBar";
import ThemeColors from "../main/ThemeColors";
import QuestionRow from "./QuestionRow";
import AddViewEditQuestion from "./AddViewEditQuestion";

import { addQuestions } from "../../../logic/services/apiQuestions";
import AlerPopUp from "../../components/AlerPopUp";
//   const [display, changeDisplay] = useState("hide");
function ManageQuestioner() {
  const toast = useToast();
  const [questions, setQuestions] = useState([]);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [qnPreview, setQnPreview] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);
  // For delete all button
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure({
    closeOnOverlayClick: false,
    closeOnEsc: false,
  });

  const [toggle, setToggle] = useBoolean();
  const { bg, fontColor, body, hover, border } = ThemeColors();

  function handleClearBtn() {
    onAlertClose();
    setQuestions([]);
    localStorage.removeItem("questions");
  }

  async function handleSubmit() {
    const isAdded = await addQuestions(questions);

    if (isAdded.status) {
      toast({
        title: "Questions Added Successfully!",
        position: "top",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      handleClearBtn();
    } else {
      toast({
        title: "Questions Not Added!",
        position: "top",
        status: "error",
        description: `${isAdded.json.error}`,
        duration: 3000,
        isClosable: true,
      });
    }
  }

  function deleteQuestion(i) {
    const updatedQuestions = questions.filter((qn, index) => index !== i);
    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    console.log(updatedQuestions);
    setQuestions(updatedQuestions);
  }

  return (
    <Box bg={body}>
      <SideBar toggle={toggle} onClick={setToggle.toggle} />
      <Box h="10%" alignSelf="flex-end">
        <AddViewEditQuestion
          isAdd={isOpen}
          onClose={onClose}
          setQuestions={setQuestions}
          isView={isView}
          setIsView={setIsView}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          qnPreview={qnPreview}
          previewIndex={previewIndex}
        />
      </Box>
      <Flex
        h={"100vh"}
        w={"100%"}
        //   marginLeft={toggle ? { base: "0px", xl: "25rem" } : "0px"}
        transition={"800ms"}
        pl={toggle ? "25vw" : "8vw"}
        pr={"5vw"}
        pt="10vh"
        flexDir={"column"}
      >
        <Box mt="3vh" minH="80vh" pb={{ base: "10vh", lg: "2em" }}>
          <HStack mb="1em" bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
            <Heading fontSize="1.75em">Manage Questionnaires</Heading>
            <Spacer />
            <Button
              variant="outline"
              leftIcon={<FiPlusCircle />}
              onClick={onOpen}
              bg={bg}
              borderColor={border}
            >
              Add Question
            </Button>
          </HStack>
          <Box bg={bg} p="1em" boxShadow="lg" borderRadius="lg">
            <TableContainer
              maxH="57.5vh"
              overflowY="visible"
              borderRadius="lg"
              sx={{
                "&::-webkit-scrollbar": {
                  width: "10px",
                  backgroundColor: `rgba(0, 0, 0, 0.15)`,
                  borderRightRadius: "lg",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `rgba(0, 0, 0, 0.15)`,
                  borderRightRadius: "lg",
                },
              }}
              bg={bg}
            >
              <Table>
                <Thead position="sticky" zIndex={3} top={0} bg={hover}>
                  <Tr color={fontColor}>
                    <Th w="5%">ID</Th>
                    <Th w="5%">Level</Th>
                    <Th w="10%">Type</Th>
                    <Th w="5%">Set</Th>
                    <Th w="100%">Question</Th>
                    <Th w="10%" textAlign="center">
                      Action
                    </Th>
                  </Tr>
                </Thead>
                <Tbody borderTopRadius="lg">
                  {questions.map((question, index) => (
                    <QuestionRow
                      question={question}
                      key={index}
                      index={index}
                      setIsView={setIsView}
                      setQnPreview={setQnPreview}
                      deleteQuestion={deleteQuestion}
                      setIsEdit={setIsEdit}
                      setPreviewIndex={setPreviewIndex}
                    />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex mt="1.5em" mb="0.5em">
              <Button
                ms="auto"
                bg="red.500"
                colorScheme="red"
                hidden={questions.length < 1}
                me={4}
                onClick={onAlertOpen}
              >
                Delete All
              </Button>
              <AlerPopUp
                isOpen={isAlertOpen}
                onClose={onAlertClose}
                onClick={handleClearBtn}
              />
              <Button
                hidden={questions.length < 1}
                bg="green.500"
                colorScheme="green"
                leftIcon={<FiCheckCircle />}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
export default ManageQuestioner;
