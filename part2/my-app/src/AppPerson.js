import React, { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/Person";

const AppPerson = () => {
  const [findText, setFindText] = useState('');

  const [countries, setCountries] = useState([]);

  const [tooLong, setTooLong] = useState(false);

  const [showDetail, setShowDetail] = useState(false);

  const [detail, setDetail] = useState({});

  const handleFindTextChange = (event) => {
    setFindText(event.target.value);
    console.log(findText);
    if (findText != "" && findText != " ") {
      findCountry(findText);
    }
  };

  const findCountry = (text) => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${text}`)
      .then((response) => {
        if (response.status == "200") {
          if (response.data.length > 10) {
            setCountries([]);
            setTooLong(true);
          } else if (response.data.length == 1) {
            setShowDetail(true);
            setDetail(response.data);
          } else {
            setTooLong(false);
            setCountries(response.data);
          }
        }
      });
  };

  const hookAll = () => {
    console.log(findText);
    let url = "https://restcountries.eu/rest/v2/all";
    axios.get(url).then((response) => {
      setTooLong(false);
      setCountries(response.data);
    });
  };
  useEffect(hookAll, []);
  return (
    <div>
      <div>
        find countries{" "}
        <input value={findText} onChange={handleFindTextChange} />
      </div>
      <div>{tooLong ? "Too many matches,specify another filter" : ""}</div>
      <div>
        <ul>
          {countries.map((country, i) => (
            <li key={i}>{country.name}</li>
          ))}
        </ul>
      </div>
      <hr />
      {showDetail ? <div>1</div> : <div>2</div>}
    </div>
  );
};

export default AppPerson;
