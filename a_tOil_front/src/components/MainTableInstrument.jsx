import React from "react";
import { useRef } from "react";
import { useTdata, useTableState } from "../store/store";

function MainTableInstrument() {
  const countref = useRef(null);
  const { data, fetchData, loading, setLoading } = useTdata((state) => ({
    data: state.data,
    fetchData: state.fetchData,
    loading: state.loading,
    setLoading: state.setLoading,
  }));

  const { tableState, createCurl, setState, resetState } = useTableState(
    (state) => ({
      tableState: state.tableState,
      createCurl: state.createCurl,
      setState: state.setState,
      resetState: state.resetState,
    })
  );

  const cleanState = () => {
    resetState();
    countref.current.value=''
    fetchData(createCurl());
  };

  const setCountHandler = () => {
    if (countref.current.value == "") {
      setState("limit", "50");
      fetchData(createCurl());
    } else {
      setState("limit", `${countref.current.value}`);
      fetchData(createCurl());
    }
  };
  const pagiPlus = () => {
    fetchData(`${data.next.split("/").slice(3).join("/")}&/`);
  };
  const pagiMinus = () => {
    fetchData(`${data.previous.split("/").slice(3).join("/")}&/`);
  };
  return (
    <div className="max-w-xl flex justify-center items-center p-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {data.previous ? (
        <button
          onClick={pagiMinus}
          type="button"
          class="pr-4 cursor-pointer hover:bg-violet-600"
        >
          &lArr;
        </button>
      ) : (
        ""
      )}
      <div className="flex justify-center items-center">
        <h4>COUNT:</h4>
        <input
          className="mx-2 border-lime-950 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          ref={countref}
        ></input>
      </div>

      <button
        type="button"
        class="cursor-pointer  text-blue-800 font-bold py-2 px-4 rounded hover:bg-lime-600"
        onClick={setCountHandler}
      >
        c apply
      </button>
      <button
        onClick={cleanState}
        type="button"
        class="cursor-pointer pl-2 text-blue-800 font-bold py-2 px-4 rounded hover:bg-red-600"
      >
        &#10006;
      </button>
      {data.next ? (
        <button
          onClick={pagiPlus}
          type="button"
          class="cursor-pointer pl-2 hover:bg-violet-600"
        >
          &rArr;
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export { MainTableInstrument };
