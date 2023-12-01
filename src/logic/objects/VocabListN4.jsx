import data from "../../assets/vocabListN4.json";

export default class VocabListN4 {
  constructor() {
    this.vocabList = data;
  }

  get specificList() {
    return search();
  }

  search() {
    return vocabList.filter((list) => {
      return (
        list.kanji.includes(searchValue) || list.romaji.includes(searchValue)
      );
    });
  }
}
