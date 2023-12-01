import data from "../../assets/vocabList.json";

export default class VocabListN1 {
  constructor() {
    this.vocabList = data.n1;
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
