import React,{useState} from "react";
import '../assets/spinner.png'

const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(false);
    

    const handleShowSpinner = () => {
        setShowSpinner(true);
        setTimeout(() => {
            setShowSpinner(false);
        }, 2000);
    };

    return (
        <div className="container">
            
            {showSpinner && <img src={Spinner.png} alt="Spinner" className="spinner" />}
        </div>
    );
}