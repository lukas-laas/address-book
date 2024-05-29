import Header from "../components/header/header";
import AddressList from "../components/addressList/addressList";

async function getAddresses(): Promise<Record<string, any>> {
  //TODO: add backend
  return (await import("./addresses.json")).default;
}

export default async function Home() {
  const _addresses = await getAddresses();
  console.log(_addresses);
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 w-full">
      <div className="max-w-96 w-full">
        <Header />
        <AddressList addresses={_addresses} />
      </div>
    </main>
  );
}
