"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

export default function AddressList({
  addresses,
}: {
  addresses: Record<string, any>;
}) {
  const ascending = useMemo(
    () => [...addresses.addresses].sort((a, b) => a.Name.localeCompare(b.Name)),
    [addresses]
  );
  const descending = useMemo(
    () => [...addresses.addresses].sort((a, b) => b.Name.localeCompare(a.Name)),
    [addresses]
  );

  const inputRef = useRef<HTMLInputElement>();
  const [order, setOrder] = useState(ascending);

  function search() {
    const filteredArray: object[] = [];
    ascending.forEach((element) => {
      if (inputRef.current && inputRef.current.value !== "") {
        if (
          element.Name.toLowerCase().includes(
            inputRef.current.value.toLowerCase()
          )
        ) {
          filteredArray.push(element);
        }

        setOrder(filteredArray);
        return;
      } else setOrder(ascending);
      return;
    });
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <button
          className="border px-2 py-1 rounded-md bg-green-900"
          onClick={() => setOrder(order == ascending ? descending : ascending)}
        >
          Reorder
        </button>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className="rounded-md border text-black"
          onChange={() => search()}
        />
      </div>
      <ol className="w-full">
        {order.map((x) => {
          return (
            <li
              key={x.id}
              className="flex flex-row border p-1 rounded-md bg-gray-800 my-1"
            >
              <div>
                <p>
                  {x.Name}, {x.street}:{x.houseNumber} {x.postalCode}
                </p>
                <p>phone: {x.telephone}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
