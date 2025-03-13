import React from 'react'

export const LoginPage = () => {
  return (
    <div>
        <form className="flex flex-col justify-center items-centers">
            <h1 className="text-lime-800 text-3xl">ログイン</h1>
            <div>
                <input
                    
                    placeholder="メールアドレス"
                />
            </div>
            <div>
                <input

                    placeholder="パスワード"
                />
            </div>
        </form>
    </div>
  )
}