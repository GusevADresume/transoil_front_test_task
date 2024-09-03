import React from "react";
import { useState } from "react";
import { useTdata, useTableState } from "../store/store";
import searcIcon from "../assets/searcIcon.png";

function SearchComp({ header }) {
  const [visible, setVisible] = useState("invisible opacity-0");
  const [filterValue, setFilterValue] = useState("");
  const { data, fetchData, loading, setLoading } = useTdata((state) => ({
    data: state.data,
    fetchData: state.fetchData,
    loading: state.loading,
    setLoading: state.setLoading,
  }));

  const { tableState, createCurl, setState } = useTableState((state) => ({
    tableState: state.tableState,
    createCurl: state.createCurl,
    setState: state.setState,
  }));
  const changeVisible = () => {
    if (visible.length > 0) {
      setVisible("");
    } else {
      setVisible("invisible opacity-0");
    }
  };
  const changeValue = (value) => {
    setFilterValue(value);
  };

  const filterHandler = () => {
    changeVisible();
    setState(header, filterValue);
    fetchData(createCurl());
    setFilterValue("");
  };
  return (
    <div>
      <div className="hover:cursor-pointer" onClick={changeVisible}>
        {visible.length > 0 ? (
          <img src={searcIcon} alt="search" className="size-6" />
        ) : (
          <p>&#10006;</p>
        )}
      </div>
      <div
        className={`absolute mr-10 z-10 inline-block ${visible} px-3 py-2 text-sm font-medium bg-lime-600 rounded-lg  dark:bg-gray-700 flex`}
      >
        <input
          value={filterValue}
          onChange={(e) => {
            changeValue(e.target.value);
          }}
        />
        <div
          onClick={filterHandler}
          className="size-6 ml-3 hover:cursor-pointer"
        >
          <img src={searcIcon} alt="search" />
        </div>
      </div>
    </div>
  );
}

export { SearchComp };
