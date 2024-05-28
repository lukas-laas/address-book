"use client";

import { useMemo, useState } from "react";

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

  const [order, setOrder] = useState(ascending);

  return (
    <>
      <div className="flex flex-row gap-1">
        <button
          className="border px-2 py-1 rounded-md bg-green-900"
          onClick={() => setOrder(order == ascending ? descending : ascending)}
        >
          Reordername
        </button>
        <input type="text" placeholder="Search" className="rounded-md border" />
      </div>
      <ol>
        {order.map((x) => {
          return (
            <li key={x.id} className="border p-1 rounded-md bg-gray-800 my-1">
              <p>
                {x.Name}, {x.street}:{x.houseNumber} {x.postalCode}
              </p>
              <p>phone: {x.telephone}</p>
            </li>
          );
        })}
      </ol>
    </>
  );
}
