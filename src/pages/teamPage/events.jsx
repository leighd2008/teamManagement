const API_KEY = `${process.env.REACT_APP_API_KEY}`;

let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events` +
  `?singleEvents=true&key=${API_KEY}`;

const Fire18UURLS = {
  Instateam: makeGoogleCalendarURL(
    `qve97fujscj93ckec7m0dpuf3c@group.calendar.google.com`
  )
};

const Fire16UURLS = {
  Instateam: makeGoogleCalendarURL(
    `frnfcc1cs26eorspcn5quctb7c@group.calendar.google.com`
  )
};

const Fire07URLS = {
  Instateam: makeGoogleCalendarURL(
    `c8ab2b397b9cee19f1034affc4fcfaedaad800c24b0c7cb5de32ecb0dd00cc00@group.calendar.google.com`
  )
};

const Fire08URLS = {
  Instateam: makeGoogleCalendarURL(
    // `hkkh6nj9bigo64atqmf63qka9k@group.calendar.google.com`
    `h0di64pai973iqc4mo5e5kl344@group.calendar.google.com`
    // `vj7ea4u5k9j1bujvl30cafmab0@group.calendar.google.com`
  )
};

const Fire09URLS = {
  Instateam: makeGoogleCalendarURL(
    `kup2ll448vgltnf3kd2mqotk78@group.calendar.google.com`
  )
};

const Fire10URLS = {
  Instateam: makeGoogleCalendarURL(
    `6ms68degiksrr01q07ln7uphbg@group.calendar.google.com`
  )
};

const Fire11URLS = {
  Instateam: makeGoogleCalendarURL(
    `ugdek62tseb858f2r5eefp73bc@group.calendar.google.com`
  )
};

const Fire12URLS = {
  Instateam: makeGoogleCalendarURL(
    `r2b5av7o7ctbtoc7nt0pu1sjp8@group.calendar.google.com`
  )
};

export { Fire12URLS, Fire11URLS, Fire10URLS, Fire09URLS, Fire08URLS, Fire07URLS, Fire16UURLS, Fire18UURLS };
