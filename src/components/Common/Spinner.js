import React, { useEffect } from "react"
import { Spinner } from "reactstrap";

const Spinners = ({ setLoading }) => {

    return (
        <React.Fragment>
            <Spinner color="primary" style={{zIndex:99999999999999}} className='position-absolute top-50 start-50' />
        </React.Fragment>
    )
}

export default Spinners;