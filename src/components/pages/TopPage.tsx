import { useNavigate } from 'react-router-dom'
import { PrimaryBtn } from '../atoms/PrimaryBtn'

export const TopPage = () => {
    const navigate = useNavigate()
    return (
        <div className="text-center">
            <h1 className="logo text-7xl">スケジュール管理App</h1>
            <p className="pt-[10vh] text-5xl">スケジュールを管理します。</p>
            <div className="pt-[20vh]">
                <PrimaryBtn onClick={() => navigate("/login")}>ログイン</PrimaryBtn>
            </div>
        </div>
    )
}