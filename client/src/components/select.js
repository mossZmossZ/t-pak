import Select from "react-select";
import "./select.css";

const Selects = () => {
    const options = [
        { value: "Location", label: "สถานที่" ,color:"black" },
        { value: "Roomate", label: "Roomate",color:"black" },
        
    ];
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return { ...styles, color: data.color };
        },
    };
    const handleChange = selectedoption => {
        //console.log('handleChange',selectedoption);
        alert(selectedoption.value)

    };
    
    return<Select className="dropdown" options={options} onChange={handleChange} styles={colorStyles}/>
};
export default Selects;