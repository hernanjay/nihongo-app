import React, { useState } from "react";
import {
    Box,
    Container,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Stat,
    StatLabel,
    StatArrow,
    Badge,
    Tfoot,
    Progress,
    useToast,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import { useAuthContext } from "../../../logic/hooks/useAuthContext";

function setQuestionStatus() {
    let x = Math.round(Math.random() * (2 - 0) + 0);
    if (x === 0) {
        return <Badge colorScheme="green">Success</Badge>;
    } else if (x === 1) {
        return <Badge colorScheme="red">Fail</Badge>;
    } else {
        return <Badge colorScheme="teal">New</Badge>;
    }
}

function createCards(amount) {
    const bg = useColorModeValue("light.400", "dark.100");
    const cards = [];
    const toast = useToast();
    for (let index = 0; index < amount; index++) {
        cards.push(
            // <Card key={index} boxShadow='lg' variant='outline' bg={bg}>
            //     <CardHeader  >
            //         <Text size='md'> {`Quiz Number : ${index + 1}`}</Text>
            //     </CardHeader>
            //     <CardBody >
            //         <Text>View a summary of all your quesions.</Text>
            //     </CardBody>
            //     <CardFooter justify='right'>
            //         <Button size='sm' variant='outline'>View here</Button>
            //     </CardFooter>
            // </Card >
            <Tr>
                <Td
                    onClick={() => {
                        toast({
                            title: "Test Opened.",
                            description: "This is a sample text thankyou.",
                            status: "success",
                            duration: 500,
                            isClosable: true,
                        });
                    }}
                    style={{ cursor: "pointer" }}
                >
                    {`Question : ${index + 1}`}
                </Td>
                <Td>
                    <Progress
                        value={Math.round(Math.random() * (100 - 75) + 75)}
                    />{" "}
                </Td>
                <Td isNumeric>
                    <Stat>
                        <StatLabel>
                            {Math.round(Math.random()) ? (
                                <StatArrow type="increase" />
                            ) : (
                                <StatArrow type="decrease" />
                            )}
                            {Math.round(Math.random() * (100 - 75) + 75)}
                        </StatLabel>
                    </Stat>
                </Td>
                <Td isNumeric>{setQuestionStatus()}</Td>
            </Tr>
        );
    }
    return cards;
}

function createItem(amount) {
    const item = [];
    for (let index = amount; index > 0; index--) {
        item.push(
            <AccordionItem key={index} my="1">
                <h2>
                    <AccordionButton variant="solid">
                        <Box as="span" flex="1" textAlign="left">
                            <ChevronRightIcon mx="5" />
                            {`N${index}`}
                        </Box>
                        <Box as="span" flex="1" textAlign="right" mx="5">
                            25/100
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {/* <SimpleGrid columns={4} spacing={5} m='5'>
                        {createCards(30)}
                    </SimpleGrid> */}
                    <TableContainer>
                        <Table variant="simple">
                            {/* <TableCaption></TableCaption> */}
                            <Thead>
                                <Tr>
                                    <Th>Question #</Th>
                                    <Th>Number of Items</Th>
                                    <Th isNumeric>Score</Th>
                                    <Th isNumeric>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>{createCards(30)}</Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>Question #</Th>
                                    <Th>Number of Items</Th>
                                    <Th isNumeric>Score</Th>
                                    <Th isNumeric>Status</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </AccordionPanel>
            </AccordionItem>
        );
    }
    return item;
}

export default function HomePage() {
    const bg = useColorModeValue("light.400", "dark.100");
    const { user } = useAuthContext();
    return (
        <>
            <Container
                maxW="container.xl"
                bg={bg}
                p="5"
                my="10"
                borderRadius="10"
            >
                <Heading m="10">Kanji Questions</Heading>{" "}
                <Accordion allowToggle m="10" bg={bg} variant="outline">
                    {createItem(5)}
                </Accordion>
                <Heading m="10">Vocab Questions</Heading>
                <Accordion allowToggle m="10" bg={bg} variant="outline">
                    {createItem(5)}
                </Accordion>
                <Heading m="10">Grammar Questions</Heading>
                <Accordion allowToggle m="10" bg={bg} variant="outline">
                    {createItem(5)}
                </Accordion>
            </Container>
        </>
    );
}
