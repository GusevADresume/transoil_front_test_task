import { create } from "zustand";
import { contentRequest } from "../requests/contentRequest";
import { devtools } from "zustand/middleware";

const useTableState = create((set, get) => ({
  tableState: {
    city: "",
    country: "",
    e_range: "",
    e_vehicle_type: "",
    electric_utility: "",
    legislative_district: "",
    maker: "",
    ordering: "",
    state: "",
    vin: "",
    yaer: "",
    limit: 50,
    offset: 0,
  },
  setState: (key, value) => {
    let state = get().tableState;
    state[key] = value;
    set({ tableState: state });
  },
  resetState: () => {
    const emptyState = {
      city: "",
      country: "",
      e_range: "",
      e_vehicle_type: "",
      electric_utility: "",
      legislative_district: "",
      maker: "",
      ordering: "",
      state: "",
      vin: "",
      yaer: "",
      limit: 50,
      offset: 0,
    };
    set({ tableState: emptyState });
  },
  createCurl: () => {
    return `infotable/?${Object.entries(get().tableState)
      .map(([key, value]) => {
        return `${key}=${value}&`;
      })
      .join("")}`;
  },
}));

const useTdata = create(
  devtools((set) => ({
    data: [],
    loading: true,
    setLoading: () => {
      set({ loading: false });
    },
    fetchData: async (curl) => {
      set({ loading: true });
      const result = await contentRequest(curl);
      if (result.results.length > 0) {
        set({ data: await result, loading: false });
      } else {
        const emptyObjcet = {
          count: 261,
          next: null,
          previous: null,
          results: [
            {
              id: 2,
              vin: "None",
              country: "None",
              city: "None",
              state: "None",
              yaer: "None",
              maker: "None",
              model: "None",
              e_vehicle_type: "None",
              e_range: "None",
              legislative_district: "None",
              electric_utility: "None",
            },
          ],
        };
        set({ data: emptyObjcet, loading: false });
      }
    },
  }))
);

export { useTdata, useTableState };
