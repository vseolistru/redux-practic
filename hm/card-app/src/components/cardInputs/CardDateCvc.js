import React, {useRef, useState} from 'react';

const CardDateCvc = ({setMonth, setYear, setCvc}) => {
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
                backgroundColor: "rgba(255, 0, 0, 0.2)"
                // Or any other style you prefer
            };
        }
    }

    return (
        <>
            <input
                type='text'
                maxLength='2'
                placeholder='MM'
                pattern='\d{2}'
                ref={ref}
                onBlur={handleBlur}
                style={style(error)}
                onChange={(e)=>setMonth(e.target.value)}
                required
            />
            <input
                type='tel'
                maxLength='2'
                placeholder='YY'
                pattern='\d{2}'
                ref={ref}
                onBlur={handleBlur}
                style={style(error)}
                onChange={(e)=>setYear(e.target.value)}
                required
            />

            <i><input
                type='text'
                maxLength='3'
                placeholder='CVC'
                pattern='\d{3}'
                ref={ref}
                onBlur={handleBlur}
                style={style(error)}
                onChange={(e)=>setCvc(e.target.value)}
                required
            /></i>
            {error && (
                <p role="alert" style={{ color: "rgb(255, 0, 0)",
                    fontSize: '10px', marginTop: '-9px' }}>
                    The fields can't be a blank and only digits
                </p>
            )}
        </>
    );
};

export default CardDateCvc;