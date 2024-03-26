import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Loading from "../../components/Loading";

function Home() {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    province: "",
    regency: "",
  });
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/home");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        if (jsonData !== null) {
          setProvinces([...new Set(jsonData.map((choice) => choice.province))]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(
      `/school-list?province=${input.province}&regency=${input.regency}`
    );
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5 min-vh">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Elementary Seeker</h1>
          <h2>A website where you can find private elementary school </h2>

          <p className="col-lg-10 fs-4">
            Discover private elementary schools by searching based on their
            province and regency.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="province"
                name="province"
                onChange={handleChange}
                required
              >
                <option disabled selected value="">
                  Select Province
                </option>
                {provinces
                  .map((province, index) => {
                    return (
                      <option key={index} value={province}>
                        {province}
                      </option>
                    );
                  })
                  .sort((a, b) =>
                    a.props.children.localeCompare(b.props.children)
                  )}
              </select>
              <label htmlFor="province">Province</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="regency"
                name="regency"
                onChange={handleChange}
                required
              >
                <option disabled selected value="">
                  Select Regency
                </option>
                {data
                  .filter((row) => {
                    return row.province === input.province;
                  })
                  .map((choice) => {
                    return (
                      <option key={choice.id} value={choice.regency}>
                        {choice.regency}
                      </option>
                    );
                  })
                  .sort((a, b) =>
                    a.props.children.localeCompare(b.props.children)
                  )}
              </select>
              <label htmlFor="regency">Regency</label>
            </div>
            <button
              className="w-100 btn btn-lg  fs-4 purple-button"
              type="submit"
            >
              <SearchRoundedIcon fontSize="large" />
              Seek
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
