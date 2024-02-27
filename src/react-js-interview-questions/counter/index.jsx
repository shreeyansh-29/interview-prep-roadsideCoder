import React, {useState, useEffect} from "react";

const Timer = () => {
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [pausedTime, setPausedTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if (name === "hours") setInputHours(parseInt(value));
    if (name === "minutes") setInputMinutes(parseInt(value));
    if (name === "seconds") setInputSeconds(parseInt(value));
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setTimerHours((prevHours) => prevHours || inputHours);
      setTimerMinutes((prevMinutes) => prevMinutes || inputMinutes);
      setTimerSeconds((prevSeconds) => prevSeconds || inputSeconds);
    } else {
      setPausedTime({
        hours: timerHours,
        minutes: timerMinutes,
        seconds: timerSeconds,
      });
    }
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (timerSeconds === 0) {
          if (timerMinutes === 0) {
            if (timerHours === 0) {
              clearInterval(interval);
              setIsActive(false);
              return;
            }
            setTimerHours((prevHours) => prevHours - 1);
            setTimerMinutes(59);
          } else {
            setTimerMinutes((prevMinutes) => prevMinutes - 1);
          }
          setTimerSeconds(59);
        } else {
          setTimerSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timerHours, timerMinutes, timerSeconds]);

  const resetTimer = () => {
    setIsActive(false);
    setTimerHours(0);
    setTimerMinutes(0);
    setTimerSeconds(0);
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
    setPausedTime({hours: 0, minutes: 0, seconds: 0});
  };

  return (
    <div>
      <div>
        <label>Hours: </label>
        <input
          type="number"
          name="hours"
          value={inputHours}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Minutes: </label>
        <input
          type="number"
          name="minutes"
          value={inputMinutes}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Seconds: </label>
        <input
          type="number"
          name="seconds"
          value={inputSeconds}
          onChange={handleInputChange}
        />
      </div>
      <h1>
        Timer: {timerHours}h {timerMinutes}m {timerSeconds}s
      </h1>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
