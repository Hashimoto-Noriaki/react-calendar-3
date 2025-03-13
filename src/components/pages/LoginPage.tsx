import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { Input } from '../atoms/Input'

export const LoginPage = () => {
    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-12">
            <form className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-lime-800 text-3xl font-bold">ログイン</h1>
                <div className="w-[80%]">
                    <Input
                        name="email"
                        type="text"
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="w-[80%]">
                    <Input
                        name="password"
                        type="text"
                        placeholder="パスワード"
                    />
                </div>
                <PrimaryBtn>ログイン</PrimaryBtn>
            </form>
        </div>
    )
}