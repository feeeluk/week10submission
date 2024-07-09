import Link from "next/link";

export function Footer(){
    return(
        <div className="flex justify-center p-3">
            
            <div className="footer">
                <Link href="/create">Add Food</Link>
                {/* &nbsp;|&nbsp; */}
            </div>
                  
        </div>
    )
}