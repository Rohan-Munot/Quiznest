import styles from "./Frame.module.css";
import {Logo} from "../Components/Logo.jsx";
import {Heading} from "../Components/Heading.jsx";
import {AdminUserLogin} from "../Components/AdminUserLogin.jsx";
import {InputBox} from "../Components/InputBox.jsx";
import {Button} from "../Components/Button.jsx";
import axios from "axios";
import {BottomWarning} from "../Components/BottomWarning.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className={styles.main}>
            <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                    <div className={styles.logoParent}>
                        <Logo className={styles.logoIcon}/>
                        <Heading/>
                    </div>
                    <div className={styles.frameParent1}>
                        <AdminUserLogin/>
                    </div>
                </div>
                <div className={styles.frameParent1}>
                    <div className={styles.inputFieldsParent}>
                        <InputBox label={'Email ID'} placeholder={'Enter your email address'}
                                  onChange={e => setEmail(e.target.value)}/>
                        <InputBox label={'Password'} placeholder={'Enter your password (min 6 characters)'}
                                  type={'password'} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className={styles.primaryButtonParent}>
                        <Button label={'Login'} onClick={async () => {
                            const response = await axios.post("http://localhost:3000/admin/signin", {
                                username: email,
                                password: password
                            })
                            localStorage.setItem("token", response.data.token)
                            navigate('/dashboard')
                        }}/>
                        <BottomWarning to={'/signup'} label={"Don't have an account?"} buttonText={'Signup now'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}