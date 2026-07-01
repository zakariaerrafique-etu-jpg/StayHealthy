import { useState } from "react";
import "../styles/profile.css";

function ProfileCard() {

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Doe",
    phone: "1234567890",
    email: "john@example.com"
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleChange = (e) => {
    setTempProfile({
      ...tempProfile,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(tempProfile);

    localStorage.setItem(
      "userProfile",
      JSON.stringify(tempProfile)
    );

    setIsEditing(false);

    alert("Profile updated successfully.");
  };

  return (
    <div className="profile-card">

      <h2>My Profile</h2>

      <div className="profile-field">
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={isEditing ? tempProfile.name : profile.name}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Phone Number</label>

        <input
          type="text"
          name="phone"
          value={isEditing ? tempProfile.phone : profile.phone}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-field">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={isEditing ? tempProfile.email : profile.email}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </div>

      {!isEditing ? (
        <button
          className="edit-btn"
          onClick={handleEdit}
        >
          Edit Profile
        </button>
      ) : (
        <button
          className="save-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>
      )}

    </div>
  );
}

export default ProfileCard;
