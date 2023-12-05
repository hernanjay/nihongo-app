import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Flex, SimpleGrid, Skeleton, Spacer } from "@chakra-ui/react";
import KanaCards from "./KanaCards";
import KanaSelectorTabSide from "./KanaSelectorTabSide";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import {
  fetchAllKana,
  fetchSpecificMode,
  fetchSpecificKana,
} from "../../../logic/services/apiKana";

function KanaLayout() {
  const navigate = useNavigate();
  const {
    kanaData,
    kanaMode,
    kanaType,
    kanaGroup,
    dispatch: kanaDispatch,
  } = useKanaContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      let res;
      if (kanaType && kanaMode.length && kanaGroup.length) {
        res = await fetchSpecificKana(kanaMode, kanaGroup, kanaType);
      } else if (kanaType && kanaMode.length && !kanaGroup.length) {
        res = await fetchSpecificMode(kanaMode, kanaType);
      } else if (kanaType && !kanaMode.length && !kanaGroup.length) {
        res = await fetchAllKana(kanaType);
      } else {
        navigate("/");
      }

      if (kanaType) {
        const json = await res.json();
        if (!res.ok) console.error(json.error);
        if (res.ok) kanaDispatch({ type: "dataReceived", payload: json });
      }
      setIsLoading(false);
    }
    fetchData();
  }, [kanaMode, kanaType, kanaGroup, kanaDispatch]);

  return (
    <Box pt="10vh">
      <Loader isLoading={isLoading} />
      <Flex
        position="relative"
        id="kanaPageScroll"
        h="90vh"
        overflow="auto"
        overscrollBehavior="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "12px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
        }}
      >
        <Box
          position="fixed"
          minW="25vw"
          ml="1.5vw"
          display={{ base: "none", lg: "block" }}
        >
          <KanaSelectorTabSide key="Tabside" isLoading={isLoading} />
        </Box>
        <Box
          minW={{ base: "25vw", lg: "62.5vw" }}
          ml={{ base: "2.5vw", lg: "30vw" }}
          mr={{ base: "2.5vw", lg: "0" }}
        >
          <SimpleGrid
            id="kanaBody"
            columns={{ base: 2, lg: 3 }}
            gap={{ base: "2.5vw", lg: "5vh" }}
            py="2.5vh"
          >
            {kanaData.map((kana, index) => {
              return (
                <Skeleton
                  key={`${kana}${index}Selector`}
                  isLoaded={!isLoading}
                  fadeDuration={3}
                >
                  <KanaCards
                    totalItems={kanaData.length}
                    kana={kana}
                    index={index}
                  />
                </Skeleton>
              );
            })}
          </SimpleGrid>
          <Spacer minH={{ base: "10vh", lg: "0" }} />
        </Box>
      </Flex>
    </Box>
  );
}

export default KanaLayout;
