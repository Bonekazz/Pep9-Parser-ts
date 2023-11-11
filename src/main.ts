import * as fs from 'node:fs'

fs.readFile('./test/text.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    actionPerformed(data);
})


function actionPerformed(data: string): void {

}