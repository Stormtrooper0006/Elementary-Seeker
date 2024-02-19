import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCarousel from "./components/ImageCarousel";
import Loading from "../../components/Loading";

function SchoolDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [imagesUrl, setImagesUrl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/school-list/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData[0]);
        setImagesUrl([
          jsonData[0].photo_url1,
          jsonData[0].photo_url2,
          jsonData[0].photo_url3,
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5 min-vh">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 mx-auto ">
          <ImageCarousel images={imagesUrl} />
        </div>
      </div>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-12 mx-auto">
          <div className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <h1 className="text-center">{data.name}</h1>
            <span>
              <b>Description: </b>
              <p>{data.description}</p>
            </span>
            <span>
              <b>Contact Number: </b>
              <p>{data.contact_number}</p>
            </span>
            <span>
              <b>Address: </b>
              <p>{data.address}</p>
            </span>
            <span>
              <b>Website: </b>
              <p>
                <a
                  href={data.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.website_link}
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDetail;
