import React from "react";
import LineChart from "../components/LineChart";
import WorldMap from "../components/WorldMap";

const Dashboard: React.FC<{}> = () => {
  return (
    <>
      <div className="md:overflow-auto w-full">
        <LineChart />
        <WorldMap />
      </div>
    </>
  );
};

export default Dashboard;
