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
    <div>
      <button
        onClick={() => setOrder(order == ascending ? descending : ascending)}
      >
        reorder
      </button>
      <ol>
        {order.map((x) => {
          return (
            <li key={x.id} className="border m-1 p-1">
              <p>
                {x.Name}, {x.street}:{x.houseNumber} {x.postalCode}
              </p>
              <p>phone: {x.telephone}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
