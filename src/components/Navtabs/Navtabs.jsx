import { useState } from "react";
import Tab from "./Navtabs/Tab";

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
 const tabs = ["Tab 1","Tab 2","Tab 3"]
  return (
    <>
    <div className="container mx-auto">
    <div className="flex flex-col">
      <nav className="flex flex-row space-x-4 mb-4">
        {tabs.map((tabName)=>{
                <Tab tabName={tabName}/>
        })}
        {/* <button
          className={`${
            activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-300"
          } py-2 px-4 rounded-lg`}
          onClick={() => handleClick("tab1")}
        >
          Tab 1
        </button> */}
        {/* <button
          className={`${
            activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-300"
          } py-2 px-4 rounded-lg`}
          onClick={() => handleClick("tab2")}
        >
          Tab 2
        </button>
        <button
          className={`${
            activeTab === "tab3" ? "bg-blue-500 text-white" : "bg-gray-300"
          } py-2 px-4 rounded-lg`}
          onClick={() => handleClick("tab3")}
        >
          Tab 3
        </button> */}
      </nav>
      <div className="bg-gray-100 p-4 rounded-lg">
        {activeTab === "tab1" && <p>Content of tab 1 goes here</p>}
        {activeTab === "tab2" && <p>Content of tab 2 goes here</p>}
        {activeTab === "tab3" && <p>Content of tab 3 goes here</p>}
      </div>
    </div>
    </div>
    </>
  );
};

export default NavTabs;
