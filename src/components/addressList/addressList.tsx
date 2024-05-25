import addresses from "../../../public/addresses.json"

export default function header() {
  return (
    <div>
      <ul>
        {addresses.addresses.map((x) => {
          return (
            <li key={x.id} className="border m-1 p-1">
              <p>
                {x.Name}, {x.street}:{x.houseNumber} {x.postalCode}
              </p>
              <p>phone: {x.telephone}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
