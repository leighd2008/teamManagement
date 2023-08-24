import React from "react";
import CsvReader from '../csvReader/csvReader'

const ResetTournaments = () => (
  <div className="resetTournaments">
    <h1 className='admin-title'>Reset Tournament Schedule</h1>
    <CsvReader/>
  </div>
);

export default ResetTournaments;