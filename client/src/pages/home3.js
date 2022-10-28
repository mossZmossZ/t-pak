import {Link} from "react-router-dom" 
import Select from "react-select";
import {useState} from "react"
import'./newhome.css'


const Home=(props)=>{
    const [userChoice, setUserChoice] = useState("")
    const [userChoice2, setUserChoice2] = useState("")
    const selectOptions = [
        { value: "location", label: "หอพัก"  },
        { value: "roomate", label: "รูมเมท" },
        { value: '', label: 'ทั้งหมด' },
    ];
    const uniOptions = [
        { value: 'kmutnb', label: 'KMUTNB' },
        { value: 'kmitl', label: 'KMITL' },
        { value: 'kmutt', label: 'KMUTT' },
        { value: 'tu', label: 'TU' },
        { value: '', label: 'ทั้งหมด' }
    ];
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "rgb(255, 246, 167)",
          borderRadius: "1rem",
          width:'20rem'
        }),
      };            

    return (
         <div className="new-Home_container">
            <div className="slogan">
                <p>T-pak เป็นได้มากกว่าที่พัก ในเว็ปนี้ .</p>
                <p>หา หอพัก , คอนโด, และ รูมเมท !</p>
            </div>
            <div className="new-head-container">
                <div className="newhead">
                    <h1>ค้นหาจาก</h1>
                    <Select className="dropdown2" isSearchable={false}  defaultValue={{label:'เลือกรูปแบบ...',value:''}} options={selectOptions} onChange={(choice) => setUserChoice(choice.value)}  />
                </div>
            </div>
            <div className="new-main">
                <Select   options={uniOptions}   isSearchable={false} defaultValue={{label:'เลือกมหาลัย...',value:''}} styles={customStyles} onChange={(choice) => setUserChoice2(choice.value)}/>
            </div>
            <div className="Sub-but">
                <Link to={{
                        pathname: '/location2',
                        state: {userChoice,userChoice2}}}>
                    Submit
                </Link>
                
            </div>
         </div>
    )
}
export default Home;