function getCurrentTimeAndDate() {
    const date = new Date();
  
    const hour = date.getHours();
    const minutes = date.getMinutes();
  
    const formatedDate = date.toLocaleDateString("en", {
      day: "2-digit",
      month: "long",
      weekday: "long",
    });
  
    return { hour, minutes, formatedDate}
  }

export { getCurrentTimeAndDate }