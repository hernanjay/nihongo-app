import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  SimpleGrid,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import KanaCards from "./KanaCards";
import KanaSelectorTabSide from "./KanaSelectorTabSide";
import Loader from "../../components/Loader";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function KanaLayout() {
  const toast = useToast();
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
        res = await fetch(
          `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/kana-custom`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              mode: kanaMode,
              group: kanaGroup,
              type: kanaType,
            }),
          }
        );
      } else if (kanaType && kanaMode.length && !kanaGroup.length) {
        res = await fetch(
          `${
            import.meta.env.VITE_LOCALHOST_API
          }/api/alphabet/${kanaType}-${kanaMode}`
        );
      } else if (kanaType && !kanaMode.length && !kanaGroup.length) {
        res = await fetch(
          `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/${kanaType}`
        );
      } else {
        navigate("/");
      }

      if (kanaType) {
        const json = await res.json();

        if (!res.ok) {
          toast({
            title: "Session Failed",
            position: "top",
            description: json.error,
            status: "error",
            duration: 2500,
            isClosable: true,
          });
        }
        if (res.ok) {
          kanaDispatch({ type: "dataReceived", payload: json });
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, [kanaMode, kanaType, kanaGroup, kanaDispatch]);

  return (
    <Box pt="10vh">
      <Loader isLoading={isLoading} />
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
      <Flex
        h="90vh"
        maxH="100vh"
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
        <Box position="fixed" minW="25vw" ml="1.5vw">
          <KanaSelectorTabSide key="Tabside" isLoading={isLoading} />
        </Box>
        <Box minW="62.5vw" ml="30vw">
          <SimpleGrid columns={3} gap={10} py="2.5vh">
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
        </Box>
      </Flex>
    </Box>
  );
}

export default KanaLayout;
