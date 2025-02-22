import React from "react";
import "./MyProfile.css";

const MyProfile = () => {
  // Sample user data (this can be fetched from an API)
  const userData = {
    userId: "USR12345",
    fullName: "John Doe",
    userEmail: "johndoe@email.com",
    userMobileNumber: "+123 456 7890",
    userStatus: "Active",
    userPassword: "********",
    userRoleid: "Admin",
    userDepartment: "IT",
    userPermissions: { SystemAdminExtra: true },
    createdAt: "2023-01-15",
    userdetailsId: "UDT98765",
    dob: "1990-05-20",
    age: 34,
    nativePlace: "California",
    nationality: "American",
    gender: "Male",
    maritalStatus: "Married",
    languagesKnown: "English, Spanish",
    identityProof: "Passport",
    identityProofDocument: "https://www.example.com/sample-passport.pdf",
    picture: "img/demo1.png",
    presentAddress: "123 Main St, Los Angeles, CA",
    permanentAddress: "456 Elm St, New York, NY",
  };

  
  
  return (
    <div className="my-profile-container">
      <div className="profile-card">
        {/* Left Sidebar - Profile Picture & Basic Info */}
        <div className="profile-sidebar">
          <div className="profile-picture">
            <img src={userData.picture} alt="Profile" />
          </div>
          <h4 className="text-center">{userData.fullName}</h4>
          <p className="text-center text-muted">{userData.userEmail}</p>
        </div>

        {/* Right Section - Profile Details in Grid */}
        <div className="profile-main">
          <h3 className="profile-heading">Profile Details</h3>

          {/* Personal Details */}
          <h4 className="section-title">Personal Details</h4>
          <div className="profile-grid">
            {["dob", "age", "gender", "maritalStatus", "nativePlace", "nationality", "languagesKnown"].map((key) => (
              <div className="profile-item" key={key}>
                <label>{key.replace(/([A-Z])/g, " $1")}:</label>
                <input type="text" value={userData[key]} disabled />
              </div>
            ))}
          </div>
          <hr />

          {/* Organizational Details */}
          <h4 className="section-title">Organizational Details</h4>
          <div className="profile-grid">
            {["userId", "userRoleid", "userDepartment", "userStatus", "createdAt"].map((key) => (
              <div className="profile-item" key={key}>
                <label>{key.replace(/([A-Z])/g, " $1")}:</label>
                <input type="text" value={userData[key]} disabled />
              </div>
            ))}
          </div>
          <hr />

          {/* Other Details */}
          <h4 className="section-title">Other Details</h4>
<div className="profile-grid">
  {["presentAddress", "permanentAddress"].map((key) => (
    <div className="profile-item" key={key}>
      <label>{key.replace(/([A-Z])/g, " $1")}:</label>
      <input type="text" value={userData[key]} disabled />
    </div>
  ))}

  {/* Identity Proof Section with View Button Inside */}
  <div className="profile-item identity-proof-container">
    <label>Identity Proof:</label>
    <div className="input-container">
      <input type="text" value={userData.identityProof} disabled />
      {userData.identityProofDocument && (
        <a href={userData.identityProofDocument} target="_blank" rel="noopener noreferrer" className="view-doc-btn">
          View
        </a>
      )}
    </div>
  </div>

  {/* System Admin Extra */}
  <div className="profile-item">
    <label>System Admin Extra:</label>
    <input type="text" value={userData.userPermissions.SystemAdminExtra ? "Yes" : "No"} disabled />
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default MyProfile;
