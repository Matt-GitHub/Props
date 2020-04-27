import React from "react";
import Data from "../data/data.json";
import TeamLead from "./TeamLead";

const Dashboard = () => {
  console.log("data from data.json", Data);
  return (
    <div className="teamLead">
      <h2>Team Lead</h2>
      {Data.map((teamData, id) => {
        return <TeamLead key={id} teamDataProps={teamData} />;
      })}
    </div>
  );
};

export default Dashboard;
