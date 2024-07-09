import { connect } from "@/utilities/connect"
import Link from "next/link";

export default async function Home() {

    const db = connect()

    const food = ( await db.query(`SELECT *
      FROM food`)).rows

  return (
    <>

      {food.map( (item) => {
        return(
          <Link key={item.food_id} href={`/${item.food_id}/`}><h1>{item.food_first_name}</h1></Link>
        )
      })}
      
    </>
  );
}
