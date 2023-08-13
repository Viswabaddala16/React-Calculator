import './App.css';
import image from './image.jpg';
const App  = () => {

  return(
    <div className="login-form">
      <h1>Login Form</h1>
      <form>
        <p>Username</p>
        <input type="text" name="" placeholder="Enter Username"/>
        <p>Password</p>
        <input type="password" name="" placeholder="Enter Password"/>
        <input type="submit" name="" placeholder="Login"/>
        <a href="#">Don't have Account</a>
        <a href="#">Forgot Password</a>
      </form>

    </div>
  );

}

export default App;