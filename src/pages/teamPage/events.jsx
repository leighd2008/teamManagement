const API_KEY = `${process.env.REACT_APP_API_KEY}`;

let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events` +
  `?singleEvents=true&key=${API_KEY}`;

const Team1URLS = {
  Instateam: makeGoogleCalendarURL(
    `a43dbdffa64202142596165a45fb9001acc8ed9fccb7bd3ef863b4629c027a71@group.calendar.google.com`
  )
};

export { Team1URLS };
