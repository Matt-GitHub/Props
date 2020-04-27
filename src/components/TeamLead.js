import React from "react";
import Students from "./Students";

const TeamLead = props => {
  console.log("props from the team lead component", props);
  return (
    <>
      <section className="card">
        <h3>{props.teamDataProps.name}</h3>
        <span className="status">
          <p>
            {props.teamDataProps.position} for {props.teamDataProps.duration}
          </p>
        </span>
        <p>Skills: {props.teamDataProps.language}</p>

        {/* pass props to students */}
      </section>
      <Students TeamDataProps={props.teamDataProps} />
    </>
  );
};

export default TeamLead;
