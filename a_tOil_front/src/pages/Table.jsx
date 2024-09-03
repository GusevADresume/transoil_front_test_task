import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TableString } from "../components/TableString";
import { TableHeader } from "../components/TableHeader";
import { useTdata, useTableState } from "../store/store";
import { MainTableInstrument } from "../components/MainTableInstrument";

function Table() {
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

  useEffect(() => {
    fetchData(createCurl());
  }, []);

  return (
    <>
      <div className="h-4 p-10 w-full flex justify-center items-center">
        <MainTableInstrument next={data.next} previos={data.previous} />
      </div>
      <div className="flex justify-center items-center">
        <table className="py-200 text-center border-collapse border border-slate-500">
          <thead className="text-base">
            {loading ? (
              <td></td>
            ) : (
              <TableHeader data={Object.keys(data.results[0])} />
            )}
          </thead>
          <tbody className="text-sm ">
            {loading ? (
              <td></td>
            ) : (
              data.results.map((object) => {
                return <TableString key={uuidv4()} data={object} />;
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="h-12"></div>
    </>
  );
}

export { Table };
