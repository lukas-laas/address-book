"use client"

import addresses from "../../../public/addresses.json"

export default function header() {
  const ascending = addresses.addresses.sort((a, b) =>
    a.Name > b.Name ? 1 : -1
  )

  return (
    <div>
      <ol>
        {ascending.map((x) => {
          return (
            <li key={x.id} className="border m-1 p-1">
              <p>
                {x.Name}, {x.street}:{x.houseNumber} {x.postalCode}
              </p>
              <p>phone: {x.telephone}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
