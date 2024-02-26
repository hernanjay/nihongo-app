import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) =>
                    prevSeconds !== 59 ? prevSeconds + 1 : 0
                );
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive]);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                setMinutes((prevMinutes) => prevMinutes + 1);
            }, 60000);
        }

        return () => clearInterval(intervalId);
    }, [isActive]);

    const toggleTimer = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    return (
        <Box
            position="fixed"
            right="20px"
            mt="1rem"
            p="10px"
            bg="gray.900"
            borderRadius="md"
            boxShadow="lg"
            cursor="pointer"
            onClick={toggleTimer}
            zIndex={100}
        >
            <Text fontSize="lg" color="white">
                {minutes < 10 ? "0" + minutes : minutes} :{" "}
                {seconds < 10 ? "0" + seconds : seconds}
            </Text>
        </Box>
    );
};

export default Timer;
