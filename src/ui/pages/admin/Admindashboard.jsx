import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  useBoolean,
} from "@chakra-ui/react";
import ChartComp from "../../Components/Chart";
import DoughnutChart from "../../components/Doughnut";
import SideBar from "../../components/SideBar";

export default function Admindashboard() {
  
  const [toggle, setToggle] = useBoolean();
  console.log(toggle);
  const boxStyle = {
    w: "100%",
    h: "150",
    shadow: "lg",
    bgColor: "RGBA(0, 0, 0, 0.06)",
  };
  const headStyle = {
    color: "blackAlpha.900",
    textAlign: "left",
    p: 3,
    m: 2,
    fontSize: "1.5em",
  };

  return (
    <Box>
      <Flex flexDir={"row"} justifyContent={"center"}>
        <SideBar toggle={toggle} onClick={setToggle.toggle} />
        <Flex
          minH={"100vh"}
          marginLeft={toggle ? "20rem" : "0px"}
          transition={"800ms"}
          p="100px"
          flexDir={"column"}
        >
          <Heading
            fontWeight="normal"
            mb={4}
            letterSpacing="tight"
            fontSize="2xl"
            mt="2%"
          >
            Welcome,{" "}
            <Flex fontWeight="bold" display="inline-flex">
              Admin Name
            </Flex>
            !
          </Heading>
          <Grid templateColumns="repeat(5, 1fr)" gap={6} mt="5%">
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N1
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N2
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N3
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N4
              </Heading>
            </Box>
            <Box sx={boxStyle}>
              <Heading sx={headStyle} size="md">
                N5
              </Heading>
            </Box>
          </Grid>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={10}
            pt="5%"
            h="60vh"
            mb={10}
          >
            <GridItem colSpan={2} border="2px groove">
              <ChartComp />
            </GridItem>
            <GridItem colSpan={1} border="2px groove">
              <DoughnutChart></DoughnutChart>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
}
