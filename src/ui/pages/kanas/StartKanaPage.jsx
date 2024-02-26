import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const StartKanaPage = () => {
    const text = "Press Start to start typing";
    const speed = 100;
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return (
        <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
            <Text>{displayText}</Text>
        </Flex>
    );
};
export default StartKanaPage;
