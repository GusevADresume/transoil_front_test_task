import React from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TableString } from "../components/TableString";
import { TableHeader } from "../components/TableHeader";
import { useTdata } from "../store/store";
import { useTableState } from "../store/store";

function Table() {
  const { data, fetchData, loading, setLoading } = useTdata((state) => ({
    data: state.data,
    fetchData: state.fetchData,
    loading : state.loading,
    setLoading : state.setLoading,
  }));

  const {tableState, createCurl, setState} = useTableState((state) => ({
    tableState : state.tableState,
    createCurl : state.createCurl,
    setState : state.setState,
  }))

  const getTableData = async () => {
    getData("infotable/?city=&country=&e_range=&e_vehicle_type=&electric_utility=&legislative_district=&maker=&model=&ordering=&state=&vin=&yaer=&limit=50&offset=0");
  };

  useEffect(() => {
    fetchData(createCurl())
  }, []);


  return (
    <>
      <div className="h-4">
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
