import {Logo} from "../Components/Logo.jsx";
import {AdminUserLogin} from "../Components/AdminUserLogin.jsx";
import {InputBox} from "../Components/InputBox.jsx";
import {Button} from "../Components/Button.jsx";
import {BottomWarning} from "../Components/BottomWarning.jsx";
import {Heading} from "../Components/Heading.jsx";

import styles from './Frame.module.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


export function Signup () {
    const [fullName, setFullName] = useState("");
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
                        <InputBox label={'Your Name'} placeholder={'Enter your full name'} onChange={e=>setFullName(e.target.value)}/>
                        <InputBox label={'Email ID'} placeholder={'Enter your email address'} onChange={e=>setEmail(e.target.value)}/>
                        <InputBox label={'Password'} placeholder={'Enter your password (min 6 characters)'} type={'password'} onChange={e=>setPassword(e.target.value)}/>
                        <InputBox label={'Confirm Password'} placeholder={'Re enter your password'} type={'password'}/>
                    </div>
                    <div className={styles.primaryButtonParent}>
                        <Button label={'Register'} onClick={async () => {
                            const response = await axios.post("http://localhost:3000/admin/signup", {
                                fullname: fullName,
                                username: email,
                                password: password
                            })
                            localStorage.setItem("token", response.data.token)
                            navigate('/dashboard')
                        }}/>
                        <BottomWarning to={'/signin'} label={'Already have an account?'} buttonText={'Login now'}/>
                    </div>
                </div>
            </div>
            </div>
    )
}



