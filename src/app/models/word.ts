

export class Word {
    wordId: number;
    categoryId: number;
    nameWord: string;
    signWord: string;

   
    constructor(id: number, categoryId: number, name: string, signWord: string) {
        this.wordId = id;
        this.categoryId = categoryId;
        this.nameWord = name;
        this.signWord = signWord;
    }
}