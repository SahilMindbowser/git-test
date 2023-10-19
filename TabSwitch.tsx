import React, { useState } from "react";

type TabSwitchProps = {
  tabs: string[];
  onChange?: (activeTab: string) => void;
};

const getClassName = (
  index: number,
  tabLength: number,
  tab: string,
  activeTab: string
): string => {
  let className =
    "cursor-pointer text-sm font-semibold uppercase w-44 h-10 items-center flex justify-center";

  switch (index) {
    case 0:
      className += " rounded-l-full rounded-r-none border-r border-[#D1D1D1]";
      break;
    case tabLength - 1:
      className += " rounded-l-none rounded-r-full";
      break;
    default:
      className += " rounded-l-none rounded-r-none border-r border-[#D1D1D1]";
      break;
  }

  switch (activeTab) {
    case tab:
      className += " bg-[#7023F0] text-white";
      break;
    default:
      className += " bg-white text-[#3F3F3F]";
      break;
  }

  return className;
};

export const TabSwitch = ({ tabs, onChange }: TabSwitchProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab: string) => {
    if (onChange) {
      onChange(tab);
    }
    setActiveTab(tab);
  };

  return (
    <div className="flex rounded-full border border-[#D1D1D1]">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={getClassName(index, tabs.length, tab, activeTab)}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};
