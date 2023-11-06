import React from 'react'
import {
    Box, Container, SimpleGrid,
    Card, CardHeader, CardBody, CardFooter, Text, Heading, Button,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
    Divider
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons';

function createCards(amount) {
    const cards = [];
    for (let index = 0; index < amount; index++) {
        cards.push(
            <Card boxShadow='md' variant='outline' borderStyle='solid' borderWidth='1px' borderColor='dark.100' borderTopRadius='10'>
                <CardHeader color='white' bg='dark.100' borderBottomStyle='solid' borderBottomWidth='1px' borderBottomColor='dark.100' borderTopRadius='10'>
                    <Text size='md'> {`Quiz Number : ${index + 1}`}</Text>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your quesions.</Text>
                </CardBody>
                <CardFooter justify='right'>
                    <Button size='sm' variant='outline' colorScheme='blackAlpha'>View here</Button>
                </CardFooter>
            </Card >
        );
    }
    return cards;
}

function createItem(amount) {
    const item = [];
    for (let index = amount; index > 0; index--) {
        item.push(
            <AccordionItem id={index} my='1' >
                <h2>
                    <AccordionButton variant='solid' >
                        <Box as="span" flex='1' textAlign='left'>
                            <ChevronRightIcon mx='5' /> {`N${index}`}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <SimpleGrid columns={4} spacing={5} m='5'>
                        {createCards(30)}
                    </SimpleGrid>
                </AccordionPanel>
            </AccordionItem>
        );
    }
    return item;
}

export default function HomePage() {
    return (
        <>
            <Container maxW='container.xl' bg='white' p='5' my='10' borderRadius='10'>
                <Heading m='10'>Kanji Questions</Heading>
                <Accordion allowToggle m='10' bg='white' variant='outline'>
                    {createItem(5)}
                </Accordion>
                <Heading m='10'>Vocab Questions</Heading>
                <Accordion allowToggle m='10' bg='white' variant='outline'>
                    {createItem(5)}
                </Accordion>
                <Heading m='10'>Grammar Questions</Heading>
                <Accordion allowToggle m='10' bg='white' variant='outline'>
                    {createItem(5)}
                </Accordion>
            </Container>
        </>
    )
}
