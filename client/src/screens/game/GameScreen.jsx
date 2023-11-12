/* eslint-disable react/prop-types */
import Fears from '../../components/fears/Fears'
import Score from '../../components/score/Score'
import Timer from '../../components/timer/Timer'
import { TIME_LIMIT } from '../../utils/constants'
import './GameScreen.css'

export const GameScreen = ({ onWhack, endGame, score, fears }) => {

  return (
    <>
      <button className="end-game" onClick={endGame}>
        Закончить игру
      </button>
      <Score value={score} />
      <Timer time={TIME_LIMIT} onEnd={endGame} />
      <Fears fears={fears} onWhack={onWhack}></Fears>
    </>
  );
};
