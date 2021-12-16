
const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

const formatMealCardDate = (dateString) => {
    let date = new Date(dateString)
    let formattedString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    return formattedString;
}

export default formatMealCardDate;