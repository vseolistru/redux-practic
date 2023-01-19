import React, {useRef, useState} from 'react';

const HolderNumber = ({setCardNumber}) => {
    const [error, setError] = useState(false);
    const ref = useRef();
    const handleBlur = (event) => {
        if (event.target.validity.patternMismatch) {
            ref.current.focus();
            setError(true)
        }

    };
    function style(error) {
        if (error) {
            return {
                backgroundColor: "rgba(255, 0, 0, 0.5)"
                // Or any other style you prefer
            };
        }
    }
    return (
        <>
            <label>card number</label>
            <input type='tel'
                   pattern="\d{16}"
                   autoComplete="cc-number"
                   maxLength='16'
                   placeholder="0000 0000 0000 0000"
                   required
                   onChange={(e)=>setCardNumber(e.target.value)}
                   onBlur={handleBlur}
                   style={style(error)}
                   ref={ref}
            />
            {error && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)", fontSize: '13px', marginTop: '-9px'}}>
                    Wrong format <em>numbers</em> only, or not be a <em>blank</em>
                </p>
            )}

        </>
    );
};

export default HolderNumber;