import React from "react";

const DAYS_OF_WEEK = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
];

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const Event = ({ event }) => {
  
  let displayStartDate = "";
  if (event.start.dateTime) {
    let startDate = new Date(event.start.dateTime);
    let day = DAYS_OF_WEEK[startDate.getDay()];
    let month = MONTHS[startDate.getMonth()];
    let date = startDate.getDate();
    let hours = 1;
    if (startDate.getHours() === 12) {
      hours = 12;
    } else {
      hours = startDate.getHours() % 12;
    }

    let minutes = startDate.getMinutes();
    let AMPM = startDate.getHours() < 12 ? `AM` : `PM`;

    if (minutes <= 10) {
      minutes = `0${minutes}`;
    }

    displayStartDate = `${day}, ${month} ${date} at ${hours}:${minutes}${AMPM}`;
  } else {
    let startDate = new Date(event.start.date);
    startDate.setDate(startDate.getDate() + 1)
    let day = DAYS_OF_WEEK[startDate.getDay()];
    let month = MONTHS[startDate.getMonth()];
    let date = startDate.getDate();

    displayStartDate = `${day}, ${month} ${date} `;
  }
  return (
    <div>
      {event.summary.includes('Birthday') ?
        <h1>{event.summary}</h1> :
        <h3>{event.summary}</h3>}
      <h3>{displayStartDate}</h3>
      <h3>
        <a
          href={`https://maps.google.com/?q=${event.location}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {event.location}
        </a>
      </h3>
      <h3>{event.description}</h3>
    </div>
  );
};

export default Event;
