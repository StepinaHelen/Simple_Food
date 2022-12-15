import * as React from "react";
import { render, screen, fireEvent } from "../../test-utils";
import CardList from "./CardsList";
const reactMock = require("react");

describe("cardList", () => {
  it("render cardList", () => {
    render(<CardList />);
  });
});
