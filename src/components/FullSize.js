import React from "react";
import Clipboard from "react-clipboard.js";
import Overdrive from "react-overdrive";
import Nav from "../components/Nav";

export default function FullSize(props) {
  const { path } = props.location.state;
  const goBack = () => {
    props.history.goBack();
  };
  return (
    <>
      <Nav title="View Image" />
      {console.log(props.location.state)}
      <div className="max-w-4xl flex flex-col items-center mx-auto mt-5">
        {console.log(path)}
        <Overdrive id={path}>
          <img alt={path} src={`https://www.carnival.com${path}`} />
        </Overdrive>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mr-2"
            onClick={goBack}
          >
            Go Back
          </button>
          <Clipboard data-clipboard-text={path}>
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
