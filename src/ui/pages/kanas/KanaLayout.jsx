import { useParams } from "react-router-dom";
import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import { useEffect } from "react";
import { useState } from "react";
import { Box, Flex, IconButton, SimpleGrid, Skeleton } from "@chakra-ui/react";
import KanaCards from "./KanaCards";
import KanaSelectorTabSide from "./KanaSelectorTabSide";
import Loader from "../../components/Loader";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useCustomKanaSelect } from "../../../logic/hooks/kana/useCustomKanaSelect";

function KanaLayout() {
  const { presetKana, dispatch: kanaDispatch } = useKanaContext();
  const [isLoadingState, setIsLoadingState] = useState(false);
  const { custom, mode, type, group } = useParams();
  const typeOfKana = type.substring(0, 8);
  const { selectCustomKana, customKana, isLoading } = useCustomKanaSelect();
  const [data, setData] = useState([]);
  if (custom === "false") {
    useEffect(() => {
      async function fetchData() {
        setIsLoadingState(true);
        const res = await fetch(
          `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/${type}`
        );

        const json = await res.json();

        if (!res.ok) {
          console.log(json.error);
          setIsLoadingState(false);
        }
        if (res.ok) {
          kanaDispatch({ type: "dataReceived", payload: json });
          setIsLoadingState(false);
        }
      }
      fetchData();
    }, [type, kanaDispatch]);
  } else if (custom === "true") {
    useEffect(() => {
      selectCustomKana(mode.split(","), type, group.split(","));
      setData(customKana);
    }, [mode, type, group]);
  }

  useEffect(() => {
    setData(presetKana);
  }, [presetKana]);

  useEffect(() => {
    setData(customKana);
  }, [customKana]);

  return (
    <Box>
      <Loader isLoading={isLoading} />
      <Loader isLoading={isLoadingState} />
      <IconButton
        position="fixed"
        bottom="2.5vh"
        right="2.5vw"
        isRound={true}
        variant="solid"
        colorScheme="teal"
        aria-label="Done"
        fontSize="20px"
        icon={<ArrowUpIcon />}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      />
      <Flex pt="10vh">
        <Box minW="25vw" my="2.5vh" ml="2.5vw">
          <KanaSelectorTabSide
            key="Tabside"
            typeOfKana={typeOfKana}
            custom={custom}
            isLoading={isLoading || isLoadingState}
          />
        </Box>
        <Box minW="62.5vw" ml="2vw">
          <SimpleGrid columns={3} gap={10} py="5vh">
            {data.map((kana, index) => {
              return (
                <Skeleton
                  key={`${kana}${index}Selector`}
                  isLoaded={!isLoading && !isLoadingState}
                  fadeDuration={3}
                >
                  <KanaCards
                    totalItems={data.length}
                    kana={kana}
                    index={index}
                  />
                </Skeleton>
              );
            })}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

export default KanaLayout;
