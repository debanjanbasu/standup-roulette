import { Wheel } from "react-custom-roulette";
import { useState } from "react";

const RouletteWheel = (props) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const attendees = props.attendees;

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * attendees.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    props.setTimerFor(attendees[prizeNumber].option);
    props.setAttendees(
      attendees.filter((_attendee, index) => index !== prizeNumber)
    );
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={attendees}
        onStopSpinning={handleStopSpinning}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};

export default RouletteWheel;
