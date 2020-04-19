const timeConversion = (s) => {
    const amPm = s.slice(-2)
    const hour = parseInt(s.slice(0, 2))
    const minute = s.slice(3, 5)
    const second = s.slice(6, 8)
    return `${getHour(amPm, hour)}:${minute}:${second}`
}

const getHour = (string, int) => {
    if (string === "AM") {
        if (int === 12) {
            return '00'
        } else if (int < 10) {
            return `0${int}`
        } else {
            return `${int}`;
        }

    } else {
        return int === 12 ? 12 : `${int + 12}`
    }

}