function name(params) {
  <Box key="KanaSelectorContainer">
    <Button
      key="ButtonAllKana"
      mx="10"
      mb="2.5"
      minW="90%"
      variant="outline"
      borderColor={border}
      fontWeight="normal"
      onClick={() => {
        navigate("/alphabet/hiragana");
      }}
    >
      All Kana
    </Button>
    <SimpleGrid px="10" columns={3} gap={5}>
      {/* Main Kana */}
      <Box textAlign="center">
        <Flex mb="1.5vh">
          <Button
            key={`ButtonGroupAllMainKana`}
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            minW="100%"
            onClick={() => {
              navigate("/alphabet/hiragana-main");
            }}
          >
            All Main Kana
          </Button>
        </Flex>
        <SimpleGrid columns={2} gap={2.5}>
          {mainKana.map((kana, index) => {
            return (
              <KanaSelectorButtonGroup
                key={`KanaSelectorButtonGroup${kana}:${index}`}
                index={index}
                kana={kana}
                border={border}
                type={"hiragana"}
                mode={"main"}
                onClick={() => {}}
              />
            );
          })}
        </SimpleGrid>
      </Box>
      {/* Dakuten Kana */}
      <Box textAlign="center">
        <Flex mb="1.5vh">
          <Button
            key={`ButtonGroupAllDakutenKana`}
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            minW="100%"
            onClick={() => {
              navigate("/alphabet/hiragana-dakuten");
            }}
          >
            All Dakuten Kana
          </Button>
        </Flex>
        <SimpleGrid columns={1} gap={2.5}>
          {dakutenKana.map((kana, index) => {
            return (
              <KanaSelectorButtonGroup
                key={`KanaSelectorButtonGroup${kana}:${index}`}
                index={index}
                kana={kana}
                border={border}
                type={"hiragana"}
                mode={"dakuten"}
              />
            );
          })}
        </SimpleGrid>
      </Box>
      {/* Combination Kana */}
      <Box textAlign="center">
        <Flex mb="1.5vh">
          <Button
            key={`ButtonGroupAllCombinationKana`}
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            minW="100%"
            onClick={() => {
              navigate("/alphabet/false/hiragana-combination");
            }}
          >
            All Combination Kana
          </Button>
        </Flex>
        <SimpleGrid columns={2} gap={2.5}>
          {combinationKana.map((kana, index) => {
            return (
              <KanaSelectorButtonGroup
                key={`KanaSelectorButtonGroup${kana}:${index}`}
                index={index}
                kana={kana}
                border={border}
                type={"hiragana"}
                mode={"combination"}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  </Box>;
}
