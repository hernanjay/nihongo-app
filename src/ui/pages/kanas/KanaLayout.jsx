import { useParams } from "react-router-dom";
import { useKananContext } from "../../../logic/hooks/kana/useKanaContext";
import { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";
import KanaCards from "./KanaCards";
import KanaSelectorTabSide from "./KanaSelectorTabSide";
import Loader from "../../components/Loader";

function KanaLayout() {
  const { data, dispatch: kanaDispatch } = useKananContext();
  const [isLoading, setIsLoading] = useState(false);
  const { type } = useParams();
  const typeOfKana = type.substring(0, 8);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/alphabet/${type}`
      );

      const json = await res.json();

      if (!res.ok) {
        console.log(json.error);
        setIsLoading(false);
      }
      if (res.ok) {
        kanaDispatch({ type: "dataReceived", payload: json });
        setIsLoading(false);
      }
    }
    fetchData();
  }, [type, kanaDispatch]);

  return (
    <Box>
      {isLoading && <Loader isLoading={isLoading} />}
      <Flex pt="10vh">
        <Box minW="25vw" my="2.5vh" ml="2.5vw">
          <KanaSelectorTabSide
            typeOfKana={typeOfKana}
            type={type}
            isLoading={isLoading}
          />
        </Box>
        <Box mx="2vw">
          <SimpleGrid columns={3} gap={10} py="5vh">
            {data.map((kana, index) => {
              return (
                <Skeleton isLoaded={!isLoading} fadeDuration={3}>
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
