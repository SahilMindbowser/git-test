import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TabSwitch } from "./TabSwitch";

//install "@testing-library/react", "@types/jest"

describe("TabSwitch Component", () => {
  it("renders tabs correctly", () => {
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    render(<TabSwitch tabs={tabs} />);

    tabs.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument();
    });
  });

  //   it('handles tab click and onChange callback', () => {
  //     const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  //     const onChange = jest.fn();
  //     render(<TabSwitch tabs={tabs} onChange={onChange} />);

  //     const tabToClick = 'Tab 2';
  //     const tabButton = screen.getByText(tabToClick);

  //     fireEvent.click(tabButton);

  //     expect(onChange).toHaveBeenCalledWith(tabToClick);
  //     expect(tabButton).toHaveClass('bg-mainPurple text-white');
  //   });

  it("sets the first tab as active by default", () => {
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    render(<TabSwitch tabs={tabs} />);

    const firstTabButton = screen.getByText("Tab 1");
    expect(firstTabButton).toHaveClass("bg-mainPurple text-white");
  });

  it("switches active tab when a different tab is clicked", () => {
    const tabs = ["Tab 1", "Tab 2", "Tab 3"];
    render(<TabSwitch tabs={tabs} />);

    const firstTabButton = screen.getByText("Tab 1");
    const secondTabButton = screen.getByText("Tab 2");

    expect(firstTabButton).toHaveClass("bg-mainPurple text-white");
    expect(secondTabButton).toHaveClass("bg-white text-neutralDarkGray");

    fireEvent.click(secondTabButton);

    expect(firstTabButton).toHaveClass("bg-white text-neutralDarkGray");
    expect(secondTabButton).toHaveClass("bg-mainPurple text-white");
  });
});
