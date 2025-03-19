import { getMonth } from 'date-fns'
import { DAYS_LIST } from '../../constants/calendar'

export const CalendarPage = () => {
    const today = new Date()
    return (
        <>
        <h1 className="font-bold text-3xl mb-5">{`${(getMonth(today))+1}`}</h1>
            <table className="w-[80%] border-collapse border-2 border-lime-800 border-solid table-fixed">
                <thead>
                    <tr className="bg-lime-800 text-white rounded-tl-lg rounded-tr-lg py-10">
                        {DAYS_LIST.map((today) => (
                            <th key={today} className="text-center text-xl py-3">
                                {today}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </>
    )
}
