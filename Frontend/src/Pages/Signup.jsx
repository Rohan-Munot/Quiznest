import {Logo} from "../Components/Logo.jsx";
import {AdminUserLogin} from "../Components/AdminUserLogin.jsx";
import {InputBox} from "../Components/InputBox.jsx";
import {Button} from "../Components/Button.jsx";
import {BottomWarning} from "../Components/BottomWarning.jsx";
import {Heading} from "../Components/Heading.jsx";

import styles from './Frame.module.css';


export function Signup () {
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
                        <InputBox label={'Your Name'} placeholder={'Enter your full name'}/>
                        <InputBox label={'Email ID'} placeholder={'Enter your email address'}/>
                        <InputBox label={'Password'} placeholder={'Enter your password (min 6 characters)'}
                                  type={'password'}/>
                        <InputBox label={'Confirm Password'} placeholder={'Re enter your password'} type={'password'}/>
                    </div>
                    <div className={styles.primaryButtonParent}>
                        <Button label={'Register'} onClick={() => {
                            console.log('register clicked')
                        }}/>
                        <BottomWarning to={'/signin'} label={'Already have an account?'} buttonText={'Login now'}/>
                    </div>
                </div>
            </div>
            </div>
    )
}



