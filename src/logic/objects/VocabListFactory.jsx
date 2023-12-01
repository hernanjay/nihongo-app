import VocabListN1 from "./VocabListN1";
import VocabListN2 from "./VocabListN2";
import VocabListN3 from "./VocabListN3";
import VocabListN4 from "./VocabListN4";
import VocabListN5 from "./VocabListN5";

export default class VocabListFactory {
  constructor(level) {
    switch (level) {
      case 1:
        return new VocabListN1();
      case 2:
        return new VocabListN2();
      case 3:
        return new VocabListN3();
      case 4:
        return new VocabListN4();
      case 5:
        return new VocabListN5();
      default:
        return [];
    }
  }
}
