import React, { useState } from "react";
import Clipboard from "react-clipboard.js";
import loadingImg from "../assets/loading.gif";
import eye from "../assets/eye.svg";
import sadFace from "../assets/sadFace.svg";
import { Link } from "react-router-dom";
import { path } from "../images/index";
import Overdrive from "react-overdrive";
import Nav from "../components/Nav";
import Alert from "../components/Alert";

import { v4 as uuidv4 } from "uuid";

export default function ImageGallery({ images, title }) {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  let results = images.filter((i) => i.title.includes(term));

  const handleOnChange = (e) => {
    setLoading(true);
    setTerm(e.target.value);
    filterRes();
  };

  const onSuccess = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  const filterRes = () => {
    results = images.filter((i) => i.title.includes(term));
    setLoading(false);
  };

  return (
    <div className="relative">
      <Nav title={title} />
      {console.log(showAlert)}
      {showAlert && <Alert />}
      <div className="flex container mx-auto justify-center my-5 flex-col">
        <input
          className="rounded p-5 text-4xl border-gray-500 w-full focus:outline-none"
          type="text"
          name="term"
          value={term}
          onChange={handleOnChange}
          placeholder="Search..."
        ></input>
      </div>
      <div className="flex container mx-auto justify-end my-5">
        {results.length} Results
      </div>
      <div className="flex flex-wrap container mx-auto justify-between">
        {!loading ? (
          results.length ? (
            results.map((image) => (
              <Clipboard
                data-clipboard-text={`${path[image.year].path}${
                  image.title
                }.ashx`}
                onSuccess={onSuccess}
                key={uuidv4()}
              >
                <div className="max-w-sm rounded overflow-hidden shadow mb-5">
                  <Overdrive id={`${path[image.year].path}${image.title}`}>
                    <img
                      alt={image.title}
                      className="w-full"
                      src={`https://www.carnival.com${path[image.year].path}${
                        image.title
                      }.ashx?useCustomFunctions=1&${
                        path[image.year].dimentions
                      }`}
                    />
                  </Overdrive>
                  <div className="px-6 py-4 flex justify-between items-center">
                    <div className="font-bold text-xl mb-2">{image.title}</div>
                    <div className="font-bold text-xl mb-2">
                      <Link
                        to={{
                          pathname: "/view",
                          state: {
                            path: `${path[image.year].path}${image.title}`,
                          },
                        }}
                      >
                        <img alt="view icon" src={eye} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Clipboard>
            ))
          ) : (
            <div className="flex container justify-center">
              <img class="w-1/3" alt="sad Face" src={sadFace} />
            </div>
          )
        ) : (
          <img alt="loading icon" src={loadingImg} />
        )}
      </div>
    </div>
  );
}
