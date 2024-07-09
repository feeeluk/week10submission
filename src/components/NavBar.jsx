import Link from "next/link";

export function NavBar(){
    return(
        <div className="navBar flex justify-between p-3">
            
            <div className="navBarLeft">
                <Link href="/">FOOD</Link>
            </div>
            
            <div className="navBarRight">
                <Link href="/">Home </Link>
            </div>       
        </div>
    )
}