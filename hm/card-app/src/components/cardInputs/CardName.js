import React, {useRef, useState} from 'react';

const CardName = ({setHolder}) => {

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
            <label>
                card holder name
            </label>
            <input
                type='text'
                required
                placeholder='Jane Appleseed'
                pattern='\w*[ ]\w*'
                onBlur={handleBlur}
                style={style(error)}
                ref={ref}
                onChange={(e)=>setHolder(e.target.value)}

            />
            {error && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)", fontSize: '13px', marginTop: '-9px'}}>
                    Wrong format <em>chars</em> only, or not be a <em>blank</em>
                </p>
            )}

        </>
    );
};

export default CardName;