import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hook/useFetch";
const Search = ({ setShowsearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  console.log(data);

  if (!query?.length) {
    data = null;
  }
  return (
    <>
      <div className="search-modal">
        <div className="form-field">
          <input
            autoFocus
            type="text"
            placeholder="Search for products"
            value={query}
            onChange={handleSearch}
          />
          <MdClose className="close-btn" onClick={() => setShowsearch(false)} />
        </div>

        <div className="search-result-content">
          {!data?.data?.length && (
            <div className="start-msg">
              Start typing to see products you are looking for.
            </div>
          )}
          <div className="search-results">
            {data?.data?.map((item) => (
              <div
                className="search-result-item"
                key={item.id}
                onClick={() => {
                  navigate("/product/" + item.id);
                  setShowsearch(false);
                }}
              >
                <div className="image-container">
                  <img
                    src={item?.attributes?.img?.data[0]?.attributes?.url}
                    alt=""
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item?.attributes?.title}</span>
                  <span className="desc">{item?.attributes?.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
