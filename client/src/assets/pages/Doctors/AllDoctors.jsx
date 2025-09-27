import React from "react";
import AllDoctorsData from "./DoctorsData.json";
import "./AllDoctors.css";

import { NavLink } from "react-router";
const AllDoctors = () => {
  return (
    <>
      <div className="container doc-container">
        <h4 className="text-center text-success mt-3">
          Select a Doctor and book your appointment online now!
        </h4>
        {AllDoctorsData.map((d) => (
          <div className="card" key={d.id} style={{ width: "15rem" }}>
            <NavLink to={`/doctors/${d.id}`}>
              <img
                src={d.pic}
                alt="picture"
                width={150}
                height={150}
                className="card-image-top"
              />
              <div className="card-body">
                <h6>{d.name}</h6>
                <p>{d.degree}</p>
              </div>
              <div className="card-footer">
                <p>
                  {" "}
                  <i className={d.icon}></i> {d.speciality}
                </p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllDoctors;