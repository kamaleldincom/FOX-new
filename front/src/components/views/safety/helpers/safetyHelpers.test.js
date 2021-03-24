import renderEmbedLink from "./renderEmbedLink";

describe("Transform youtube links to embeded ones", () => {
  test("should return void if no url given", () => {
    expect(renderEmbedLink()).toBeUndefined();
  });
  test("should transform raw link into embeded one", () => {
    expect(renderEmbedLink("https://www.youtube.com/watch?v=4tEYcCldoPw")).toBe(
      "https://www.youtube.com/embed/4tEYcCldoPw"
    );
  });
  test("should strip extra arguments in raw url and transfrom", () => {
    expect(
      renderEmbedLink("https://www.youtube.com/watch?v=8sJk9AE82kc&t=25s")
    ).toBe("https://www.youtube.com/embed/8sJk9AE82kc");
  });
  test("should strip extra arguments in previously embeded urls", () => {
    expect(
      renderEmbedLink("https://www.youtube.com/embed/8sJk9AE82kc&t=25s")
    ).toBe("https://www.youtube.com/embed/8sJk9AE82kc");
  });
  test("should leave valid url as it is", () => {
    expect(renderEmbedLink("https://www.youtube.com/embed/8sJk9AE82kc")).toBe(
      "https://www.youtube.com/embed/8sJk9AE82kc"
    );
  });
});
