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

  test("should a button with Voir nos produits", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Voir nos produits");
  });
});
