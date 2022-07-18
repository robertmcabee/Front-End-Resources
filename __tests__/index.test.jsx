import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import TagSelector from "../components/TagSelector";
import App from "../components/App";
import ResourceContainer from "../components/ResourceContainer";
import Footer from "../components/Footer";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  it("renders a heading", () => {
    render(<Header />);
    const heading = screen.getByRole("heading", {
      name: /front\-end resources/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders the sub-heading", () => {
    render(<Header />);
    const subHeading = screen.getByText(
      /a curated collection of free resources from across the web for front\-end developers, covering everything from design to deployment\./i
    );
    expect(subHeading).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("renders the twitter link", () => {
    render(<Footer />);
    const twitterLink = screen.getByRole("button", {
      name: /curated by @robertthemcabee/i,
    });
    expect(twitterLink).toBeInTheDocument();
  });
  it("renders the footer html element", () => {
    render(<Footer />);
    const footer = screen.getByRole("footer");
    expect(footer).toBeInTheDocument();
  });
});

describe("resource container", () => {
  it("renders relavent items when tag is active", () => {
    render(<ResourceContainer setFilter={jest.fn} filter={["css"]} />);
    expect(
      screen.getByText("CSS-Tricks is a website about websites", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
  it("renders relavent items when multiple tags are active", () => {
    render(
      <ResourceContainer
        setFilter={jest.fn}
        filter={["accessibility", "html", "css", "reference"]}
      />
    );
    expect(
      screen.getByText(
        "A blog trying to be a pattern library. All about designing inclusive web interfaces, piece by piece.",
        {
          exact: false,
        }
      )
    ).toBeInTheDocument();
  });
  it("does not render filtered items", () => {
    render(<ResourceContainer setFilter={jest.fn} filter={["regex"]} />);
    expect(
      screen.queryByText("CSS-Tricks is a website about websites", {
        exact: false,
      })
    ).toBe(null);
  });
});

describe("Tag Selector", () => {
  it("renders tags", () => {
    render(<TagSelector setFilter={jest.fn} filter={[]} />);
    expect(screen.getByRole("button", { name: /css/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /javascript/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /regex/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /reference/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /accessibility/i })
    ).toBeInTheDocument();
  });

  it("clicking a tag adds it to the filter", async () => {
    const user = userEvent.setup();
    render(<App />);
    const cssTag = screen.getAllByRole("button", { name: /css/i })[0];
    user.click(cssTag);
    await new Promise((r) => setTimeout(r, 50)); //await re-render for state change
    expect(cssTag).toHaveClass("font-bold");
  });

  it("clicking a tag twice adds and then removes it from the filter", async () => {
    const user = userEvent.setup();
    render(<App />);
    const cssTag = screen.getAllByRole("button", { name: /css/i })[0];

    expect(
      screen.getByText("RegExp syntax", {
        exact: false,
      })
    ).toBeInTheDocument();

    user.click(cssTag); //filter out non-css resources
    await new Promise((r) => setTimeout(r, 50)); //await re-render for state change

    expect(
      screen.queryByText("RegExp syntax", {
        exact: false,
      })
    ).toBe(null);

    user.click(cssTag); //remove filter
    await new Promise((r) => setTimeout(r, 50)); //await re-render for state change

    expect(
      screen.getByText("RegExp syntax", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
