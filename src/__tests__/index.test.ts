import index from "../index";

describe("duration", () => {
  describe("display", () => {
    describe("index", () => {
      it("should define a display", () => {
        expect(index).toMatchSnapshot();
      });
    });
  });
});
