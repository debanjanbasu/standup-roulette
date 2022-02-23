import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = (props) => (
  <CountdownCircleTimer
    key={props.timerFor}
    isPlaying={props.timerFor !== null}
    duration={props.individualTime}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
    onComplete={() => {
      const msg = new SpeechSynthesisUtterance(
        `Sorry ${props.timerFor}, your time is over!`
      );
      speechSynthesis.speak(msg);
      // Reset the timer
      props.setTimerFor(null);
    }}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Timer;
