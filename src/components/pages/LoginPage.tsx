import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { NotLoginLayout } from '../templates/NotLoginLayout'

export const LoginPage = () => {
  return (
    <NotLoginLayout>
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-12">
            <form className="flex flex-col justify-center items-center gap-10">
                <h1 className="text-lime-800 text-3xl font-bold">ログイン</h1>
                <div className="w-[80%]">
                    <input
                        name="email"
                        type="text"
                        className="w-full border-4 border-solid border-lime-800 p-4"
                        placeholder="メールアドレス"
                    />
                </div>
                <div className="w-[80%]">
                    <input
                        name="password"
                        type="text"
                        className="w-full border-4 border-solid border-lime-800 p-4"
                        placeholder="パスワード"
                    />
                </div>
                <PrimaryBtn>ログイン</PrimaryBtn>
            </form>
        </div>
    </NotLoginLayout>
  )
}