import React from "react";

function SearchBar(props) {
  return (
    <div className="pt-1 pb-4 text-center container">
      <div className="row py-lg-1">
        <div className="col-lg-6 col-md-8 mx-auto">
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Enter school name or related key word..."
              aria-label="Search"
              value={props.input}
              onChange={(e) => {
                props.handleChange(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
