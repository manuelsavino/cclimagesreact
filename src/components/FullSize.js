import React from "react";
import Clipboard from "react-clipboard.js";
import Overdrive from "react-overdrive";
import Nav from "../components/Nav";
import { path } from "../images/index";

export default function FullSize(props) {
  const { image } = props.location.state;
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <>
      <Nav title="View Image" />
      <div className="max-w-4xl flex flex-col items-center mx-auto mt-5">
        <Overdrive id={`${path[image.year].path}${image.title}`}>
          <img
            alt={path}
            src={`https://www.carnival.com${path[image.year].path}${
              image.title
            }.ashx`}
          />
        </Overdrive>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mr-2"
            onClick={goBack}
          >
            Go Back
          </button>
          <Clipboard
            data-clipboard-text={
              path[image.year].scpath
                ? `${path[image.year].scpath}${image.title}`
                : `${path[image.year].path}${image.title}.ashx`
            }
          >
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
              onClick={goBack}
            >
              Copy Path
            </button>
          </Clipboard>
        </div>
      </div>
    </>
  );
}
