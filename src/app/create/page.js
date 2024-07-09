import { connect } from "@/utilities/connect";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function Home() {

  async function handleAdd(formData){
    "use server"

    const first_name = formData.get("first_name")
    const last_name = formData.get("last_name")
    const favorite = formData.get("favorite")
    const comment = formData.get("comment")

    const db = connect()

    db.query(`INSERT INTO food (food_first_name, food_last_name, food_favorite, food_comment)
              VALUES ($1, $2, $3, $4)`, [first_name, last_name, favorite, comment])

    revalidatePath("/")
    redirect("/")

  }

  return (
    <>
      <form className="form" action={handleAdd}>

        <label id="" for="first_name">First Name:</label>
        <input id="first_name" name="first_name" type="text" placeholder="What is your first name"></input>

        <label id="" for="last_name">Last Name:</label>
        <input id="last_name" name="last_name" type="text" placeholder="What is your  last name"></input>

        <label id="" for="favorite">Favorite:</label>
        <input id="favorite" name="favorite" type="text" placeholder="What is your favorite food"></input>

        <label id="" for="comment">Comment:</label>
        <input id="comment" name="comment" type="text" placeholder="Write a comment"></input>

        <button id="" className="submit" type="submit" >Submit</button>

      </form>

    </>
  );
}
