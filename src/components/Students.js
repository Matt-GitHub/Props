import React from "react";

const Students = props => {
  console.log("student props", props);
  return (
    <>
      <h2>Students</h2>
      <div className="student-container">
        {props.TeamDataProps.students.map(student => {
          return (
            <span className="students">
              <h4>{student.name}</h4>{" "}
              <h4 className="red">{student.position}</h4>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Students;
