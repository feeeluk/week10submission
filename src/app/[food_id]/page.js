import { connect } from "@/utilities/connect"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export default async function FoodPage({params}){

    const db = connect()

    const data = (await db.query(`SELECT *
                                FROM food
                                WHERE food_id = $1`, [params.food_id])).rows[0]


    async function handleUpdate(formData){
        "use server"

        const db = connect()
        const data = Object.fromEntries(formData)
        const {first_name, last_name, favorite, comment} = data

        db.query(`UPDATE food
                SET food_first_name = $2, food_last_name = $3, food_favorite = $4, food_comment = $5 
                WHERE food_id = $1`,
                [params.food_id, first_name, last_name, favorite, comment])

                revalidatePath("/")
                redirect("/")
    }

    
    async function handleDelete(){
        "use server"

        const db = connect()

        db.query(`DELETE FROM food 
                WHERE food_id = $1`,
                [params.food_id])

                revalidatePath("/")
                redirect("/")
    }

    return(
        <>
      
            <div>

                <form action={handleUpdate} className="form">
                    <label id="" for="first_name" className="">First name:</label>
                    <input id="first_name" name="first_name" className="" defaultValue={data.food_first_name}></input>

                    <label id="" for="last_name" className="">Last name:</label>
                    <input id="last_name" name="last_name" className="" defaultValue={data.food_last_name}></input>

                    <label id="" for="favorite" className="">Favorite food:</label>
                    <input id="favorite" name="favorite" className="" defaultValue={data.food_favorite}></input>

                    <label id="" for="comment" className="">Comment:</label>
                    <input id="comment" name="comment" className="" defaultValue={data.food_comment}></input>

                    <button type="submit">update</button>
                    
                </form>

                <form action={handleDelete} className="form"> 
                    <button type="submit">delete</button>
                </form>

            </div>

        </>
    )
}   