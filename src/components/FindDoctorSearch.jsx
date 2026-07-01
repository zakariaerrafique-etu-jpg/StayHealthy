import { useState } from "react";
import "../styles/search.css";

function FindDoctorSearch({ doctors = [], onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (value) => {
    setKeyword(value);

    const filteredDoctors = doctors.filter((doctor) => {
      const search = value.toLowerCase();

      return (
        doctor.name.toLowerCase().includes(search) ||
        doctor.speciality.toLowerCase().includes(search) ||
        doctor.location.toLowerCase().includes(search)
      );
    });

    onSearch(filteredDoctors);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by doctor, speciality or location..."
        value={keyword}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default FindDoctorSearch;
