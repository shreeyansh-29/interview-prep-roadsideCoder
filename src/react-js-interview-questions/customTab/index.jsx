import { useState } from "react";
import { Tabs, TabList, TabItem, TabPanel } from "./components/Tabs";
import "./styles.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("three");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Tabs
        //
        defaultValue="two"
        onChange={(value) => setActiveTab(value)}
      >
        <TabList>
          <TabItem value="one" label="one" />
          <TabItem value="two" label="two" />
          <TabItem value="three" label="three" />
        </TabList>

        <TabPanel value="one">
          <h1> one </h1>
        </TabPanel>
        <TabPanel value="two">
          <h1> two </h1>
        </TabPanel>
        <TabPanel value="three">
          <Tabs
            value={activeTab}
            defaultValue="two"
            onChange={(value) => setActiveTab(value)}
          >
            <TabList>
              <TabItem value="one" label="one" />
              <TabItem value="two" label="two" />
              <TabItem value="three" label="three" />
            </TabList>

            <TabPanel value="one">
              <h1> one </h1>
            </TabPanel>
            <TabPanel value="two">
              <h1> two </h1>
            </TabPanel>
            <TabPanel value="three">
              <h1> three </h1>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>

      <button onClick={() => setActiveTab("two")}>change tab</button>
    </div>
  );
}
