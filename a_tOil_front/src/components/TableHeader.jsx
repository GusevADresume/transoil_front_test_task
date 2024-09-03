import React from "react";
import { OrderingComp } from "./OrderingComp";
import { SearchComp } from "./SearchComp";

function TableHeader({data}) {
    return (
        <>
    <th className="max-w-screen-2xl border-2 border-sky-500 text-center ">
      <td className="flex justify-center"><SearchComp header={data[0]}/>{data[0]} <OrderingComp headrValue={data[0]}/></td>
    </th>
    <th className="border-2 border-sky-500 text-center">
    <td className="flex justify-center"><SearchComp header={data[1]}/>{data[1]}<OrderingComp headrValue={data[0]}/></td>
    </th>
    <th className="border-2 border-sky-500 text-center">
    <td className="flex justify-center"><SearchComp header={data[2]}/>{data[2]}<OrderingComp headrValue={data[2]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center"><SearchComp header={data[3]}/>{data[3]}<OrderingComp headrValue={data[3]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center"><SearchComp header={data[4]}/>{data[4]}<OrderingComp headrValue={data[4]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center"><SearchComp header={data[5]}/>{data[5]}<OrderingComp headrValue={data[5]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center"><SearchComp header={data[6]}/>{data[6]}<OrderingComp headrValue={data[6]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-2 ">
    <td className="flex justify-center"><SearchComp header={data[7]}/>{data[7]}<OrderingComp headrValue={data[7]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-6 ">
    <td className="flex justify-center"><SearchComp header={data[8]}/>{data[8]}<OrderingComp headrValue={data[8]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1">
    <td className="flex justify-center"><SearchComp header={data[9]}/>{data[9]} <OrderingComp headrValue={data[9]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1">
    <td className="flex justify-center"><OrderingComp headrValue={data[10]}/>{data[10]}<SearchComp header={data[10]}/></td>
    </th>
    <th className="border-2 border-sky-500 ps-18">
    <td className="flex justify-center"><SearchComp header={data[11]}/>{data[11]} <OrderingComp headrValue={data[11]}/></td>
    </th>
    </>
  );
}

export { TableHeader };
