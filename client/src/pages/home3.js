import {Link} from "react-router-dom" 
import Select from "react-select";
import {useState} from "react"
import'./newhome.css'


const Home=(props)=>{
    const [userChoice, setUserChoice] = useState("")
    const [userChoice2, setUserChoice2] = useState("")
    const [priceFilter,setPriceFilter]= useState('0')
    const [genderFilter, setGenderFilter] = useState('')
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
    const priceOptions = [
        { value: "0", label: "ราคาทั้งหมด" },
        { value: "4001", label: "4000 ขึ้นไป" },
        { value: "8002", label: "8000 ขึ้นไป" },
    ];
    const gendertypeOptions = [
        { value: 'หอพักชาย', label: 'หอพักชาย' },
        { value: 'หอพักหญิง', label: 'หอพักหญิง' },
        { value: 'หอพักรวม', label: 'หอพักรวม' },
        { value: '', label: 'หอพักทั้งหมด' },
        
    ]
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "rgb(255, 246, 167)",
          borderRadius: "1rem",
          width:'20rem'
        }),
      };
    const customStyles2 = {
        control: (base, state) => ({
          ...base,
          background: "#AFB4ff",
          borderRadius: "1rem",
          width:'12rem',
          boxShadow: state.isFocused ? null : null,
          border: null,
        }),
        singleValue: (provided,state) => ({
            ...provided,
            color: 'white' ,
         
        }),
        dropdownIndicator: base => ({
            ...base,
            color: "white" // Custom colour
          })
        
      };
                  

    return (
         <div className="new-Home_container">
            <header className="slogan">
                <p>T-pak เป็นได้มากกว่าที่พัก ในเว็ปนี้ .</p>
                <p>หา หอพัก , คอนโด, และ รูมเมท !</p>
            </header>
            <body>
                <div className="new-head-container">
                    <div className="newhead">
                        <h1>ค้นหาจาก</h1>
                        <Select className="dropdown2"  isSearchable={false}  defaultValue={{label:'เลือกรูปแบบ...',value:''}} options={selectOptions} onChange={(choice) => setUserChoice(choice.value)}  />
                    </div>
                </div>
                <div className="new-main">
                    <div className="uniselector">
                        <Select  options={uniOptions}   isSearchable={false} defaultValue={{label:'เลือกมหาลัย...',value:''}} styles={customStyles} onChange={(choice) => setUserChoice2(choice.value)}/>
                    </div>
                    <div className="select-container">
                        <Select className="dropdown3"   defaultValue={{label:`ช่วงราคา...`,value:"0"}} isSearchable={false} options={priceOptions} onChange={(choice) =>setPriceFilter(choice.value)} styles={customStyles2}/>
                        <Select  className="dropdown3"   defaultValue={{label:`ปรเภท...`}} isSearchable={false} options={gendertypeOptions} onChange={(choice) =>setGenderFilter(choice.value)} styles={customStyles2}/>
                    </div>
                </div>
                <div className="Sub-but">
                    <Link to={{
                            pathname: '/location2',
                            state: {userChoice,userChoice2}}}>
                        Submit
                    </Link>
                
                </div>
            </body>  
         </div>
    )
}
export default Home;