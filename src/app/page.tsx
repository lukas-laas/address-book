import Image from "next/image"
import Header from "../components/header/header"
import AddressList from "../components/addressList/addressList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Header />
      <AddressList />
    </main>
  )
}
