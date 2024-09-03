import React from "react";
import { OrderingComp } from "./OrderingComp";

function TableHeader({data}) {
    return (
        <>
    <th className="p-2 border-2 border-sky-500 text-center ">
      <td className="flex justify-center">{data[0]} <OrderingComp headrValue={data[0]}/> </td>
      
    </th>
    <th className="border-2 border-sky-500 text-center px-1 ">
    <td className="flex justify-center">{data[1]} <OrderingComp headrValue={data[0]}/></td>
    </th>
    <th className="border-2 border-sky-500 text-center px-1 ">
    <td className="flex justify-center">{data[2]} <OrderingComp headrValue={data[2]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center">{data[3]} <OrderingComp headrValue={data[3]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center">{data[4]} <OrderingComp headrValue={data[4]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center">{data[5]} <OrderingComp headrValue={data[5]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1 ">
    <td className="flex justify-center">{data[6]} <OrderingComp headrValue={data[6]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-2 ">
    <td className="flex justify-center">{data[7]} <OrderingComp headrValue={data[7]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-6 ">
    <td className="flex justify-center">{data[8]} <OrderingComp headrValue={data[8]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1">
    <td className="flex justify-center">{data[9]} <OrderingComp headrValue={data[9]}/></td>
    </th>
    <th className="border-2 border-sky-500 px-1">
    <td className="flex justify-center">{data[10]} <OrderingComp headrValue={data[10]}/></td>
    </th>
    <th className="border-2 border-sky-500 ps-18">
    <td className="flex justify-center">{data[11]} <OrderingComp headrValue={data[11]}/></td>
    </th>
    </>
  );
}

export { TableHeader };
