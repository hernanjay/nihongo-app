import VocabListN4 from "./VocabListN4";

export default class VocabListFactory {
  constructor(level) {
    switch (level) {
      case 4:
        return new VocabListN4();

      default:
        return [];
    }
  }
}
