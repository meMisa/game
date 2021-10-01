// node modules
import * as React from "react";
// types
import { GameItems } from "./types/game";
// constants
import {
  LIZARD,
  PAPER,
  ROCK,
  SCISSORS,
  SPOCK,
  YOU_PICKED,
  THE_HOUSE_PICKED,
  PLAY_AGAIN,
} from "constants/texts";
// asserts
import Icon_Scissors from "assets/images/icon-scissors.svg";
import Icon_Spock from "assets/images/icon-spock.svg";
import Icon_Paper from "assets/images/icon-paper.svg";
import Icon_Lizard from "assets/images/icon-lizard.svg";
import Icon_Rock from "assets/images/icon-rock.svg";
// styles
import "styles/gameResult.css";

interface Pros extends GameItems {
  playAgain: any;
}
const GameResultCmp = ({
  userItemName,
  houseItemName,
  resultText,
  winner,
  playAgain,
}: Pros) => {
  const items = [
    {
      itemName: userItemName,
      text: YOU_PICKED,
      className: "",
      winnerClassName: winner === "user" ? "winner" : "",
      resultText,
    },
    {
      itemName: houseItemName,
      text: THE_HOUSE_PICKED,
      className: "house-part",
      winnerClassName: winner === "house" ? "winner" : "",
      resultText,
    },
  ];

  /****************************************************** FUNCTIONS  *******************************************/
  const findImage = React.useCallback((iconName: string) => {
    switch (iconName) {
      case SCISSORS:
        return Icon_Scissors;
      case SPOCK:
        return Icon_Spock;
      case PAPER:
        return Icon_Paper;
      case LIZARD:
        return Icon_Lizard;
      case ROCK:
        return Icon_Rock;
    }
  }, []);

  return (
    <div className="display-flex justify-content-space-between font-weight-bold game-result-wrapper">
      {items.map((item, index: number) => (
        <div key={index} style={{ display: "contents" }}>
          <div className="display-flex flex-direction-col item-container">
            <p className="game-result-header">{item.text}</p>
            <div className={item.winnerClassName}>
              <button className={`button-common ${item.itemName}`}>
                <img
                  className={`image-common pick-img ${item.className}`}
                  src={findImage(item.itemName)}
                  alt={item.itemName}
                />
              </button>
            </div>
            <p className="game-result-header-mobile">{item.text}</p>
          </div>
          {index === 0 && (
            <div className="display-flex flex-direction-col result-text-wrapper">
              <p>{item.resultText}</p>
              <button
                className="result-text cursor-pointer"
                onClick={playAgain}
              >
                {PLAY_AGAIN}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default GameResultCmp;
