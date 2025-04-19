
export default function useFormattedTime(time: Date) {
    const hours = time.getHours();
    const minutes = time.getMinutes();

    function padZero(num: number) {
        return (num < 10 ? `0${num}` : num.toString())
    }

    return `${padZero(hours)}:${padZero(minutes)}`
}