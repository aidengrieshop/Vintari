import LoginForm from "../components/LoginForm";
import NavigateBtn from "../components/NavigateBtn";

function Login() {
    return (
        <>
            <LoginForm/>
            <NavigateBtn to="/Register" label="Create an account" styleClass="register-btn"/>
        </>
    )
}

export default Login