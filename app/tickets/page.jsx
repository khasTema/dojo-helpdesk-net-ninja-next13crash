import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";

export default  function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently opened tickets </small></p>
          </div>
          <Link href={`tickets/create`} className="btn-primary p-2 ml-auto">Create new</Link>
        </nav>

        <Suspense fallback={<Loading/>}>
          <TicketsList />
        </Suspense>
    </main>
  )
}
