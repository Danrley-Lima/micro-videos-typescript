import { Category } from "./category";

describe("Category Tests", () => {
  test("constructor of category", () => {
    const categoryInstance = new Category("Movie");
    expect(categoryInstance.name).toBe("Movie");
  });
});
