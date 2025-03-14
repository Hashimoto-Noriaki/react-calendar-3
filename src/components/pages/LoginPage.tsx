import { ChangeEvent,FormEvent,useState } from 'react'
import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { Input } from '../atoms/Input'
import { LoginInfoType } from '../../types/login'
import { login } from '../../api/login'

export const LoginPage = () => {
    const [loginInfo,setLoginInfo] = useState<LoginInfoType>({
        email:"",
        password:"",
    })

    const [errorMessage,setErrorMessage] = useState("")
    
    const changeLoginInfo = (e: ChangeEvent<HTMLInputElement>)=> {
        const { name,value } = e.target;
        setLoginInfo({...loginInfo,[name]: value});
    }

    const handleLogin = (e: FormEvent<HTMLFormElement>)=> {
       e.preventDefault()
       setErrorMessage("")
       try {
        login(loginInfo)
       } catch {
        setErrorMessage("ログインが終了しました。")
       }
    }

    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-12">
            <form className="flex flex-col justify-center items-center gap-10" onSubmit={handleLogin}>
                {errorMessage !== "" && (
                    <div className="bg-red-500 p-4 text-white w-[80%] rounded-lg">
                        {errorMessage}
                    </div>
                )}
                <h1 className="text-lime-800 text-3xl font-bold">ログイン</h1>
                <div className="w-[80%]">
                    <Input
                        name="email"
                        type="text"
                        value={loginInfo.email}
                        onChange={changeLoginInfo}
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="w-[80%]">
                    <Input
                        name="password"
                        type="password"
                        value={loginInfo.password}
                        onChange={changeLoginInfo}
                        placeholder="パスワード"
                    />
                </div>
                <PrimaryBtn onClick={() => null}>ログイン</PrimaryBtn>
            </form>
        </div>
    )
}