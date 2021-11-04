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

export function getJwtInfo(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}