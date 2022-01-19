import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const [detail, setDetail] = useState("");
  const search = useLocation();
  const type = useParams();

  useEffect(() => {
    fetchNumberDetail();
    // console.log(search.pathname);
  }, []);

  const fetchNumberDetail = async () => {
    const number = search.pathname.split(`/`);
    //console.log(number[2]);
    console.log(type);
    const fetchDetail = await fetch(`http://numbersapi.com/${type["id"]}?json`);
    const details = await fetchDetail.json();

    //console.log(details.text);
    setDetail(details.text);
  };

  return (
    <div>
      <h1>Number details here !.</h1>
      {detail}
    </div>
  );
};

export default ProductDetail;
