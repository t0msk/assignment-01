// eslint-disable-next-line @typescript-eslint/no-unused-vars

// inferface for unit object
interface IUnit {
    seconds: number;
    name: string;
}

// function to format string (adds "s" to end if it is plural)
const formatUnits = (unit: string, time: number): string => {
    if (time == 1) {
        return unit;
    } else {
        return unit + 's';
    }
};

// core fucntion
export const convertSecondsToTimeUnits = (numOfSecondsString: string): string => {
    // parse string to num
    let seconds: number = parseInt(numOfSecondsString);

    // validation of input values
    if (isNaN(seconds) || seconds < 0) {
        return 'Invalid input';
    }

    if (seconds == 0) {
        return '0 seconds';
    }

    let returnString: string;
    returnString = '';

    // array of objets which holds certain time objects used in calculations
    const units: IUnit[] = [
        { seconds: 1, name: 'second' },
        { seconds: 60, name: 'minute' },
        { seconds: 3600, name: 'hour' },
        { seconds: 86400, name: 'day' },
    ];

    // get biggest time object as first in array
    let biggestUnit: IUnit = units[0];

    // loop if there is remaining time (more than 1 minute)
    while (seconds >= 60) {
        // get biggest time object based on seconds
        units.forEach((unit) => {
            if (seconds >= unit.seconds) {
                biggestUnit = unit;
            }
        });

        // calculations
        seconds /= biggestUnit.seconds;
        const partialResult: number = Math.floor(seconds);

        // substract whole number "partialResult" from seconds and multiply it with biggestUnit seconds to get remainder
        seconds -= partialResult;
        seconds = Math.ceil(seconds * biggestUnit.seconds);

        // format output
        returnString +=
            (returnString === '' ? '' : ' and ') +
            partialResult +
            ' ' +
            formatUnits(biggestUnit.name, partialResult);
    }

    // if there are any seconds left, then format them and display them
    if (seconds > 0) {
        seconds = Math.floor(seconds);
        if (returnString !== '') {
            returnString += ' and ';
        }
        returnString += seconds + (seconds == 1 ? ' second' : ' seconds');
    }

    // return result
    return returnString;
};
