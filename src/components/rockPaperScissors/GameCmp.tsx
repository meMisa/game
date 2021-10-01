// node modules
import * as React from "react";
// components
import ImageGroupCmp from "./ImageGroupCmp";
import GameResultCmp from "./GameResultCmp";
// actions
import { selectItem, deSelectItem } from "./actions/gameActions";
// reducer
import { initialState, reducer } from "./reducers/gameReducer";
// assets :
import Icon_Scissors from "assets/images/icon-scissors.svg";
import Icon_Spock from "assets/images/icon-spock.svg";
import Icon_Paper from "assets/images/icon-paper.svg";
import Icon_Lizard from "assets/images/icon-lizard.svg";
import Icon_Rock from "assets/images/icon-rock.svg";
// constants
import { SCISSORS, SPOCK, PAPER, LIZARD, ROCK } from "constants/texts";
// styles
import "styles/game.css";

const GameCmp = (props: { changeScore: any }) => {
  /****************************************************** STATE  *******************************************/
  const [state, dispatch] = React.useReducer(reducer, initialState);

  /****************************************************** FUNCTIONS  *******************************************/
  const handleOnClick = React.useCallback((e) => {
    dispatch(selectItem({ name: e.currentTarget.name }));
  }, []);

  const playAgain = React.useCallback(() => {
    dispatch(deSelectItem());
  }, []);
  /****************************************************** USE EFFECTS  *******************************************/
  React.useEffect(() => {
    props.changeScore(state.currentItem.score);
  }, [state.currentItem.score]);

  return (
    <>
      {state.currentItem.selectedItem ? (
        <GameResultCmp {...state.currentItem} playAgain={playAgain} />
      ) : (
        <div className="pentagon">
          <ImageGroupCmp
            src={[Icon_Scissors]}
            wrapperClassName="top margin-top-1"
            btnClassName={["scissors"]}
            alt={[SCISSORS]}
            handleOnClick={handleOnClick}
          />
          <ImageGroupCmp
            src={[Icon_Spock, Icon_Paper]}
            wrapperClassName="display-flex justify-content-space-around margin-auto middle"
            btnClassName={["spock", "paper"]}
            alt={[SPOCK, PAPER]}
            handleOnClick={handleOnClick}
          />
          <br />
          <br />
          <br />
          <ImageGroupCmp
            src={[Icon_Lizard, Icon_Rock]}
            wrapperClassName="display-flex justify-content-space-evenly margin-auto end"
            btnClassName={["lizard", "rock"]}
            alt={[LIZARD, ROCK]}
            handleOnClick={handleOnClick}
          />
        </div>
      )}
    </>
  );
};
export default GameCmp;
