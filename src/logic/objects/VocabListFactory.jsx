import dataN1 from "../../assets/vocabListN1.json";
import dataN2 from "../../assets/vocabListN2.json";
import dataN3 from "../../assets/vocabListN3.json";
import dataN4 from "../../assets/vocabListN4.json";
import dataN5 from "../../assets/vocabListN5.json";

export default class VocabListFactory {
  constructor(level) {
    switch (level) {
      case 1:
        return dataN1;
      case 2:
        return dataN2;
      case 3:
        return dataN3;
      case 4:
        return dataN4;
      case 5:
        return dataN5;
      default:
        return [];
    }
  }
}
