import { Outlet } from 'react-router-dom'

export const NotLoginLayout = () => {
    return (
        <div className="relative">
            <header className="bg-white fixed leading-[50px] top-0 left-0 right-0">
                <div className="container mx-auto flex justify-between">
                    <p className="logo">スケジュール管理</p>
                    <nav>
                        <ul className="flex gap-5">
                            <li className="text-lime-800">利用説明</li>
                            <li className="text-lime-800">ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
                <Outlet/>
            </main>
        </div>
    )
}