import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  useBoolean,
} from "@chakra-ui/react";
import ChartComp from "../../components/Chart";
import DoughnutChart from "../../components/Doughnut";
import SideBar from "../../components/SideBar";
import MenuComponent from "../../components/MenuComponent";

export default function Admindashboard() {
  const [toggle, setToggle] = useBoolean();
  console.log(toggle);
  const boxStyle = {
    w: "100%",
    h: { base: "8rem", lg: "11rem" },
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
      <Flex flexDir={"row"} justifyContent={"center"} overflow={"auto"}>
        <SideBar toggle={toggle} onClick={setToggle.toggle} />
        <Flex
          h={"100vh"}
          w={"100%"}
          marginLeft={toggle ? { base: "0px", lg: "25rem" } : "0px"}
          transition={"800ms"}
          p="5.5rem"
          flexDir={"column"}
        >
          <MenuComponent></MenuComponent>
          <Heading
            fontWeight="normal"
            mb={4}
            letterSpacing="tight"
            fontSize="2xl"
            mt={{ base: "6rem", md: "2rem" }}
          >
            Welcome,{" "}
            <Flex fontWeight="bold" display="inline-flex">
              Admin Name
            </Flex>
            !
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
            gap={6}
            mt="5%"
          >
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
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={10}
            pt={{base:"5rem", lg:"5%"}}
            mb={10}
          >
            <GridItem colSpan={{ base: 1, xl: 2 }} border="2px groove">
              <ChartComp />
            </GridItem>
            <GridItem colSpan={{ base: 1, xl: 1 }} border="2px groove">
              <DoughnutChart />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
}
