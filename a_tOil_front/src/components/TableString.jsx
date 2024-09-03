import React from 'react'

function TableString({data}) {
  return (
    <tr >
        <td className="border-2 border-sky-500">{data.id}</td>
        <td className="border-2 border-sky-500">{data.vin}</td>
        <td className="border-2 border-sky-500">{data.country}</td>
        <td className="border-2 border-sky-500">{data.city}</td>
        <td className="border-2 border-sky-500">{data.state}</td>
        <td className="border-2 border-sky-500">{data.yaer}</td>
        <td className="border-2 border-sky-500">{data.maker}</td>
        <td className="border-2 border-sky-500">{data.model}</td>
        <td className="border-2 border-sky-500">{data.e_vehicle_type}</td>
        <td className="border-2 border-sky-500">{data.e_range}</td>
        <td className="border-2 border-sky-500">{data.legislative_district}</td>
        <td className="border-2 border-sky-500">{data.electric_utility}</td>
    </tr>
  )
}

export {TableString}