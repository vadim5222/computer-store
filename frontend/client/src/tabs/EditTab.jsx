import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";



const EditTab = () => {
    return(
        <>
        <button>
            <Link to='/profile/'>
            <BsFillCaretLeftFill/>
            </Link>
        </button>
        <p>редактирование</p>
        </>
    )
}

export default EditTab