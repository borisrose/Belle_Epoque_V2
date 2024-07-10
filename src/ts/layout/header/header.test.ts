import header from "./header";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

let app;

describe("Header Suite", () => {
  beforeAll(() => {
    const app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
    app.innerHTML += header();
  });

  test("should have a nav", () => {
    const navBar = screen.getByRole("navigation"); // est <nav></nav>
    expect(navBar).toBeInTheDocument();
  });
});
