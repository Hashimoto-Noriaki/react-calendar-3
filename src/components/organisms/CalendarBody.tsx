import { getDate,} from 'date-fns'

type PropsType = {
    currentDate: Date;
    dateList: Date[][]
}

export const CalendarBody = ({currentDate,dateList}: PropsType) => {
    const dateColor = (targetDate: Date, currentDate: Date): string => {
        if(isToday(currentDate)) return "bg-lime-800 text-white rounded-full"
        return isSameMonth(targetDate,currentDate) ? "text-black" : "text-gray-300"
    }

    return (
        <tbody>
            {dateList.map((oneWeek) => (
                <tr key={`week-${getDate(oneWeek[0])}`} className="mx-10">
                    {oneWeek.map((item) => (
                        <td
                            key={`day-${getDate(item)}`}
                            className="bg-white h-[10vh] border-lime-800 border-2 border-solid"
                        >
                            <span 
                                className= {`inline-block w-[20px] leading-[20px] text-center ${dateColor(
                                    today,
                                    currentDate
                                )}`}
                            >
                                {getDate(item)}
                            </span>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
