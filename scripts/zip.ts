import admzip from 'adm-zip';
import glob from 'glob';
import path from 'path';
import fs from 'fs';

const options: glob.IOptions = {
    dot: true,
    nodir: true,
    ignore: ['dist/**/*', 'node_modules/**/*', 'zip/**/*'],
};

glob('**/*', options, (err, files) => {
    const zip = new admzip();
    files.forEach((file) => zip.addLocalFile(file, path.dirname(file)));
    if (!fs.existsSync('zip')) fs.mkdirSync('zip');
    zip.writeZip('zip/assignment-01.zip');
});
