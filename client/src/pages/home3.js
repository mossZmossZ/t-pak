import {Link} from "react-router-dom" 
import Select from "react-select";
import {useState} from "react"


const Home=(props)=>{
    const [userChoice, setUserChoice] = useState("ALL")
    const [userChoice2, setUserChoice2] = useState("")
    const selectOptions = [
        { value: "location", label: "หอพัก"  },
        { value: "roomate", label: "รูมเมท" },
        { value: 'ALL', label: 'ทั้งหมด' },
    ];
    const uniOptions = [
        { value: 'kmutnb', label: 'KMUTNB' },
        { value: 'kmitl', label: 'KMITL' },
        { value: 'kmutt', label: 'KMUTT' },
        { value: 'tu', label: 'TU' },
        { value: '', label: 'ทั้งหมด' }
    ];          

    return (
         <div className="Home_container">
            <div className="slogan">
                <p>T-pak เป็นได้มากกว่าที่พัก ในเว็ปนี้ .</p>
                <p>หา หอพัก , คอนโด, และ รูมเมท !</p>
            </div>
            <div className="head-container">
                <div className="head">
                    <h1>ค้นหาจาก</h1>
                    <Select className="dropdown" isSearchable={false}  defaultValue={{label:'หอพัก',value:'location'}} options={selectOptions} onChange={(choice) => setUserChoice(choice.value)} />
                </div>
            </div>
            <div className="main">
                <Select  isSearchable={false} options={uniOptions}  onChange={(choice) => setUserChoice2(choice.value)}/>
              
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