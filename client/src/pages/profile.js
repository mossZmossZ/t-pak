import { getUser } from "../services/authorize";
const profile=()=>{
    const userid = String(getUser()).toUpperCase()
    return(
        <div>
             <h1>สวัสดีคุณ : {userid}</h1>
            <p>การประกาศของคุณ</p>
        </div>
       
    )
}
export default profile;