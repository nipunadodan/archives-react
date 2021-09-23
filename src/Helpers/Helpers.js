export function getDateStr(date){
    let dateObj = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return {
        date:dateObj.getDate(),
        month:dateObj.getMonth() + 1,
        monthName:monthNames[dateObj.getMonth()],
        year:dateObj.getFullYear()
    }
}