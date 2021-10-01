// node modules
import * as React from "react";
// components :
import ScoreCmp from "components/rockPaperScissors/ScoreCmp";
import GameCmp from "components/rockPaperScissors/GameCmp";
import Modal from "components/common/ModalCmp";
// hooks
import useModal from "hooks/useModal";
// apis
import gameApis from "apis/gameApis";
// constants
import {RULES, LEADER_BOARD} from "constants/texts";
// assets
import Image_Rules_Bonus from "assets/images/image-rules-bonus.svg";
// styles
import "styles/rockPaperScissorsPage.css";

const RockPaperScissorsPage: React.FC = () => {
  /****************************************************** STATE  *******************************************/
  const {isShowing, toggle} = useModal();
  const [score, setScore] = React.useState(0);

  /****************************************************** FUNCTIONS  *******************************************/
  const changeScore = React.useCallback((grade: number) => {
    setTimeout(() => {
      setScore(grade);
    }, 2000);
  }, []);

  const callLeaderBoards = () => {
    gameApis.getLeaderBoard({payload: {}})
      .then(list => {
        console.log('MISA =>>> ', list);
      })
      .catch(error => {

      })
  }
  /****************************************************** USE EFFECTS  *******************************************/
  // toggle body style
  React.useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isShowing]);

  return (
    <div className="rock-paper-scissors margin-auto">
      <ScoreCmp score={score}/>
      <GameCmp changeScore={changeScore}/>
      <div className="rules-wrapper">
        <button className="rules-btn cursor-pointer" onClick={callLeaderBoards}>
          {LEADER_BOARD}
        </button>
        <button className="rules-btn cursor-pointer" onClick={toggle}>
          {RULES}
        </button>
        <Modal isShowing={isShowing} hide={toggle} title={RULES}>
          <img src={Image_Rules_Bonus} alt={RULES}/>
        </Modal>
      </div>
    </div>
  );
};

export default RockPaperScissorsPage;
