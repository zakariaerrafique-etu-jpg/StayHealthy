import React, { useEffect } from "react";

function Notification() {
  useEffect(() => {
    console.log("Notification loaded");
  }, []);

  return <div>Appointment Reminder</div>;
}

export default Notification;

