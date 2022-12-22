import React, { useState, useEffect } from 'react';
import './App.css';
import { convertSecondsToTimeUnits } from './time';

function App() {
    const [seconds, setSeconds] = useState<string>('');
    const [time, setTime] = useState<string>('N/A');

    useEffect(() => {
        const timeString = convertSecondsToTimeUnits(seconds);
        setTime(timeString);
    }, [seconds]);

    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <label>
                        Enter time in seconds:
                        <input
                            type="string"
                            name="seconds"
                            value={seconds}
                            onChange={(event) => setSeconds(event.target.value)}
                        />
                    </label>
                </form>
                <div>
                    <p>Result in human readable format:</p>
                    <p>{time}</p>
                </div>
            </header>
        </div>
    );
}

export default App;
