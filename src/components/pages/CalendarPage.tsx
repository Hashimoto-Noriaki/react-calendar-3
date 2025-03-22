import { eachDayOfInterval, eachWeekOfInterval, endOfMonth, endOfWeek, getMonth, startOfMonth,getDate,isToday,isSameMonth } from "date-fns";
import { useEffect, useState } from "react";
import { CalendarHeader } from '../organisms/CalendarHeader'

export const CalendarPage = () => {
    const today = new Date()
    const [dateList, setDateList] = useState<Date[][]>([]);

    const dateColor = (targetDate: Date, currentDate: Date): string => {
        if(isToday(currentDate)) return "bg-lime-800 text-white rounded-full"
        return isSameMonth(targetDate,currentDate) ? "text-black" : "text-gray-300"
    }

    useEffect(() => {
        const monthOfSundayList = eachWeekOfInterval({
            start: startOfMonth(today),
            end: endOfMonth(today),
        })
        const newDateList: Date[][] = monthOfSundayList.map((date) => {
            return eachDayOfInterval({
                start: date,
                end: endOfWeek(date),
            })
        })
        setDateList(newDateList)
        }, [])

    return (
        <>
            <h1 className=" font-bold text-3xl mb-5">{`${getMonth(today) + 1}月`}</h1>
            <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
                <CalendarHeader/>
                <tbody>
                    {dateList.map((oneWeek) => (
                        <tr key={`week-${getDate(oneWeek[0])}`} className="mx-10">
                            {oneWeek.map((item) => (
                                <td
                                    key={`day-${getDate(item)}`}
                                    className="bg-white h-[10vh] border-lime-800 border-2 border-solid"
                                >
                                    <span className= {`inline-block w-[20px] leading-[20px] text-center ${dateColor(
                                        today,
                                        item
                                        
                                    )}`}
                                    >
                                        {getDate(item)}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
