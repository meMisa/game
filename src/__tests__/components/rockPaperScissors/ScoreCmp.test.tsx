import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import ScoreCmp from "components/rockPaperScissors/ScoreCmp";

const score = 0;

afterEach(() => {
  cleanup();
});

describe("Test", () => {
  test("should render ScoreCmp component correctly", () => {
    render(<ScoreCmp score={score} />);
    const scoreComponent = screen.getByTestId("score");
    expect(scoreComponent).toBeInTheDocument();
    expect(scoreComponent).toHaveTextContent("SCORE");
  });

  test("match snapshot", () => {
    const tree = renderer.create(<ScoreCmp score={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
