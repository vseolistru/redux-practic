import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "./store/action";

function App() {
    const values = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(values)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchUser(
            e.target.firstName.value,
            e.target.lastName.value,
            e.target.email.value,
            e.target.password.value
        ))
        e.target.reset()
    }

    return (
         <div className="App">
             <header>
                 Learn to code by watching others
                 <p>
                     See how experienced developers solve problems in real-time.
                     Watching scripted tutorials is great, but understanding
                     how developers think is invaluable.
                 </p>
             </header>
             <div className='form__container'>
                 <label>Try it free 7 days then $20/mo. thereafter </label>
                 <form className="form__inputs" onSubmit={handleSubmit}>
                     <input type='text' required='Hello'  placeholder='First Name' name='firstName'/>
                     <input type='text' required placeholder='Last Name' name='lastName'/>
                     <input type='email' required placeholder='EmailAddress' name='email'/>
                     <input type='password' required placeholder='Password' name='password'/>
                     <button type='submit'> Claim your free trial</button>
                     <p>
                         By clicking the button, you are agreeing to our
                         <span> Terms and Services</span>
                     </p>
                 </form>
             </div>
         </div>
    );
}

export default App;
