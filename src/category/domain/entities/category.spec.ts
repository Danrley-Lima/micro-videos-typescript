import { omit } from "lodash";
import { Category } from "./category";
import { assert } from "console";

describe("Category Tests", () => {
  test("constructor of category", () => {
    // Arrange
    const props = {
      name: "Movie",
      description: "some description",
      is_active: true,
      created_at: new Date(),
    };

    // Act
    const categoryInstance = new Category(props);

    // Assert
    expect(categoryInstance.props).toStrictEqual(props);
    expect(categoryInstance.name).toBe("Movie");
    expect(categoryInstance.description).toBe("some description");
    expect(categoryInstance.is_active).toBeTruthy();
    expect(categoryInstance.created_at).toBeInstanceOf(Date);
    expect(categoryInstance.created_at).toBe(props.created_at);
  });

  test("constructor of category 2", () => {
    let categoryInstance = new Category({ name: "Movie" });
    let props = omit(categoryInstance.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(categoryInstance.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    categoryInstance = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
    });
    expect(categoryInstance.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });

    categoryInstance = new Category({
      name: "Movie",
      description: "other description",
    });
    expect(categoryInstance.props).toMatchObject({
      name: "Movie",
      description: "other description",
    });

    categoryInstance = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(categoryInstance.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    created_at = new Date();
    categoryInstance = new Category({
      name: "Movie",
      created_at,
    });
    expect(categoryInstance.props).toMatchObject({
      name: "Movie",
      created_at,
    });
  });

  test("getter of name field", () => {
    let categoryInstance = new Category({ name: "Movie" });
    expect(categoryInstance.description).toBeNull();

    categoryInstance = new Category({
      name: "Movie",
      description: "some description",
    });
    expect(categoryInstance.description).toBe("some description");

    categoryInstance = new Category({
      name: "Movie",
    });

    categoryInstance["description"] = "other description";
    expect(categoryInstance.description).toBe("other description");

    categoryInstance["description"] = undefined;
    expect(categoryInstance.description).toBeNull();

    categoryInstance["description"] = null;
    expect(categoryInstance.description).toBeNull();
  });

  test("getter and setter of is_active prop", () => {
    let categoryInstance = new Category({ name: "Movie" });
    expect(categoryInstance.is_active).toBeTruthy();

    categoryInstance = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(categoryInstance.is_active).toBeTruthy();

    categoryInstance = new Category({
      name: "Movie",
      is_active: false,
    });
    expect(categoryInstance.is_active).toBeFalsy();
  });

  test("getter of created_at prop", () => {
    let categoryInstance = new Category({ name: "Movie" });
    expect(categoryInstance.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    categoryInstance = new Category({
      name: "Movie",
      created_at,
    });
    expect(categoryInstance.created_at).toBe(created_at);
  });
});
