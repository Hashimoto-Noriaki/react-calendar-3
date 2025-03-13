import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { NotLoginLayout } from '../templates/NotLoginLayout'

export const TopPage = () => {
    return (
        <NotLoginLayout>
            <div className="text-center">
                <h1 className="logo text-7xl">スケジュール管理App</h1>
                <p className="pt-[10vh] text-5xl">スケジュールを管理します。</p>
                <div className="pt-[20vh]">
                    <PrimaryBtn>ログイン</PrimaryBtn>
                </div>
            </div>
        </NotLoginLayout>
    )
}