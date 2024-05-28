"use client";

import { useState } from "react";
import addresses from "../../../public/addresses.json";

export default function AddressList() {
  const ascending = addresses.addresses.sort((a, b) =>
    a.Name.charCodeAt(0) > b.Name.charCodeAt(0) ? 1 : -1
  );
  const descending = addresses.addresses.sort((a, b) =>
    a.Name.charCodeAt(0) > b.Name.charCodeAt(0) ? -1 : 1
  );

  const [order, setOrder] = useState(ascending);
  console.log(order);

  return (
    <div>
      <button onClick={() => setOrder(descending)}>reorder</button>
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
