import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Spacer,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import ChartComp from "../../components/UserChart";
import DoughnutChart from "../../components/UserDoughnut";
import ThemeColors from "../main/ThemeColors";

const ViewDetailsModal = ({ isOpen, onClose, selectedItem }) => {
    if (!selectedItem) {
        return null; // Do not render the modal if no item is selected
    }

    const { name, email, level } = selectedItem;

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="5xl"> {/* Set the size to "xl" for extra large */}
            <ModalOverlay bg="rgba(0, 0, 0, 0.5)" />
            <ModalContent>
                <ModalHeader>{name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Email: {email}</Text>
                    <Text>Nihongo Level: {level}</Text>


                    {/* Tabs for Graph Visualization and Summary Details */}
                    <Tabs mt={2}>
                        <TabList>
                            <Tab>Graph Visualization</Tab>
                            <Tab>Answered Quiz Details</Tab>
                        </TabList>

                        <TabPanels>
                            {/* Tab for Graph Visualization */}
                            <TabPanel>
                                {/*  graph visualization component  */}
                                <Grid
                                    templateColumns={{ base: "repeat(1, 1fr)", xl: "repeat(3, 1fr)" }}
                                    gap={10}
                                    pt={{ base: "5rem", lg: "5%" }}
                                    mb={10}
                                >
                                    <GridItem colSpan={{ base: 1, xl: 2 }} border="2px groove">
                                        <ChartComp />
                                    </GridItem>
                                    <GridItem colSpan={{ base: 1, xl: 1 }} border="2px groove">
                                        <DoughnutChart />
                                    </GridItem>
                                </Grid>
                                <Spacer minH={"3vh"}></Spacer>
                            </TabPanel>

                            {/* Tab for Summary Details */}
                            <TabPanel>
                                {/*  summary details component  */}
                                <Text>Summary Details Goes Here</Text>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};


export default ViewDetailsModal;