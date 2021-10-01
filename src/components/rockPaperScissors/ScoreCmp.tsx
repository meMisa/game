// node modules
import * as React from "react";
// assets :
import Logo_Bonus from "assets/images/logo-bonus.svg";
// constants
import { LOGO_BONUS_ALT, SCORE } from "constants/texts";
// styles
import "styles/score.css";

const ScoreCmp = (props: { score: number }) => (
  <div
    className="justify-content-space-between score-wrapper"
    data-testid="score"
  >
    <div className="score-logo-bonus">
      <img src={Logo_Bonus} alt={LOGO_BONUS_ALT} />
    </div>
    <div className="score-text score-bonus-text-container">
      <p>{SCORE}</p>
      <div className="dark-text count">
        <span>{props.score}</span>
      </div>
    </div>
  </div>
);
export default ScoreCmp;
