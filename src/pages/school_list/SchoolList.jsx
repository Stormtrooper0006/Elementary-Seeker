import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Loading from "../../components/Loading";
import NotAvailable from "../../components/NotAvailable";

function SchoolList() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const province = params.get("province");
  const regency = params.get("regency");

  const [data, setData] = useState(null);
  const [filteredSchools, setFilteredSchools] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/school-list?province=${province}&regency=${regency}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;

    const filteredSchools = data.filter((school) => {
      const nameMatch = school.name.toLowerCase().includes(input.toLowerCase());
      const descriptionMatch = school.description
        .toLowerCase()
        .includes(input.toLowerCase());
      return nameMatch || descriptionMatch;
    });

    setFilteredSchools(filteredSchools);
  }, [data, input]);

  function handleChange(newInput) {
    setInput(newInput);
  }

  if (!data || !filteredSchools) {
    return <Loading />;
  }

  if (data.length === 0) {
    return <NotAvailable />;
  }

  return (
    <div className="min-vh">
      <SearchBar input={input} handleChange={handleChange} />
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <h1>
            Province: {province} - Regency: {regency}
          </h1>
          <h2>Results: {filteredSchools.length}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {filteredSchools.map((school) => {
              return (
                <Card
                  key={school.school_id}
                  id={school.school_id}
                  name={school.name}
                  description={school.description}
                  photo_url1={school.photo_url1}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolList;
