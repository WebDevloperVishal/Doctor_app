import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import EditUserProfile from "./EditUserProfile";
const UserProfile = () => {
  const naviagte = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    naviagte("/login");
    toast.success("logout successfully");
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Manage Your Account & Appointments</h4>
          <div className="col-md-3">
            <img src="" alt="userPic" className="card p-2" width={200} />
          </div>
          <div className="col-md-8 mt-3">
            <div className="user-container mb-3">
              <h6>Name : </h6>
              <h6>Gender : </h6>
              <h6>DOB : </h6>
              <h6>Email : </h6>
              <h6>Phone : </h6>
              <h6>Address : </h6>
            </div>
            {/* buttons */}
            <div className="button-container mt-5">
              <button
                className="btn btn-warning"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="fa-solid fa-pen-to-square"></i> Edit Profile
              </button>
              <button
                className="btn btn-primary ms-3"
                onClick={() => naviagte("/user/appointments")}
              >
                <i className="fa-solid fa-list"></i> Appointments
              </button>
              <button className="btn btn-danger ms-3" onClick={handleLogout}>
                <i className="fa-solid fa-power-off"></i> LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* edit modal */}
      {isOpen && (
        <EditUserProfile isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;