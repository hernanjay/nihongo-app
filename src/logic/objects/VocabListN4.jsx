import data from "../../assets/vocabList.json";

export default class VocabListN4 {
  constructor() {
    this.vocabList = data.n4;
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
