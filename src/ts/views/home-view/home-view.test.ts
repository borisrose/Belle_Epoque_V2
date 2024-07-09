import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
import homeView from "./home-view";

let app;

describe("Home View Suite", () => {
  beforeAll(() => {
    app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
    app.innerHTML += homeView();
  });

  test("should a main", () => {
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  test("should a h1 with Home Page", () => {
    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent("Home Page");
  });
});
