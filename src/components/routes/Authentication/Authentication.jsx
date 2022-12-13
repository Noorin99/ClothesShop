import SignUp from '../../sign-up/Sign-up';
import SignInComponent from '../../sign-in/sign-in';
import './Authentication.scss'

const Authentication = () => {

 return(
    <div className='authentication-container'>
      <SignInComponent />
      <SignUp />
    </div>
 )
}

export default Authentication;