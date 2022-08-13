import React from "react";
import PageNotFound from "../pages/PageNotFound";
import renderer from "react-test-renderer";

describe("<PageNotFound />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PageNotFound errorMessage={"error message"} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
