import data from "../../assets/vocabList.json";

export default class VocabListN5 {
  constructor() {
    this.vocabList = data.n5;
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
