import React from "react";
import { useTableState, useTdata } from "../store/store";

function OrderingComp({ headrValue }) {
  const { createCurl, setState } = useTableState((state) => ({
    createCurl: state.createCurl,
    setState: state.setState,
  }));

  const { data, fetchData } = useTdata((state) => ({
    data: state.data,
    fetchData: state.fetchData,
  }));
  const clicUpkHandler = () => {
    setState("ordering", `${headrValue}`);
    fetchData(createCurl());
  };
  const clicDownkHandler = () => {
    setState("ordering", `-${headrValue}`);
    fetchData(createCurl());
  };
  return (
    <div className="flex px-2 justify-center items-cente">
      <button
        type="button"
        class="cursor-pointer pr-2 hover:bg-violet-600"
        onClick={clicUpkHandler}
      >
        &uarr;
      </button>
      <button
        type="button"
        class="cursor-pointer pl-2 hover:bg-violet-600"
        onClick={clicDownkHandler}
      >
        &darr;
      </button>
    </div>
  );
}

export { OrderingComp };
