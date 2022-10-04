import "./Signupmoss.css"
import { useState } from "react";
import FormInput from "./Signupcomponents/FormInput";
const Signupmoss = () =>{
    const [username,setUsername] = useState("")

    console.log(username)

    console.log("re-randered")

    return (
    <div className = "SignupmossApp">
        <form>
            <FormInput placeholder="Username" setUsername={setUsername}/>
            <FormInput placeholder="Email"/>
            <FormInput placeholder="Full Name"/>
            <FormInput placeholder="something else."/>

        </form>
    </div>
    );
}
export default Signupmoss;