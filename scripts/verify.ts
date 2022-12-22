import chalk from 'chalk';
import meta from '../meta.json';

try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { convertSecondsToTimeUnits } = require('../dist');
    convertSecondsToTimeUnits('12');
    if (!meta.candidate) {
        throw new Error('Candidate missing from meta.json');
    }
    if (!meta.date) {
        throw new Error('Date missing from meta.json');
    }
    console.log(chalk.green('Verified!'));
} catch (err) {
    console.log(String(err));
    console.log(chalk.red('Verification failed!'));
    process.exit(1);
}
