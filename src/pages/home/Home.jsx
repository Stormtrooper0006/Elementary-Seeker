import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

function Home() {
  const history = useHistory();
  const [input, setInput] = useState({
    province: "",
    regency: "",
  });

  const handleSubmit = async (e) => {
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

    console.log(value);
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
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
                <option value="dummyProvince1">Dummy Province 1</option>
                <option value="dummyProvince2">Dummy Province 2</option>
                <option value="dummyProvince3">Dummy Province 3</option>
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
                <option value="dummyRegency1">Dummy Regency 1</option>
                <option value="dummyRegency2">Dummy Regency 2</option>
                <option value="dummyRegency3">Dummy Regency 3</option>
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
