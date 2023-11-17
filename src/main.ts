import * as fs from 'node:fs'
import InBuffer from './Lex-Analyzer/src/InBuffer';
import Translator from './Parser/Translator';

fs.readFile('./test/teste.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    actionPerformed(data);
})

function actionPerformed(data: string): void{
    const inBuffer = new InBuffer(data);
    const translator = new Translator(inBuffer);
    translator.translate();
}