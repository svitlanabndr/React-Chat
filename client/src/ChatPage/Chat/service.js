export const getFormattedDate = () => {
    const now = new Date();

    let dd = now.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = now.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    const date = now.getFullYear()+'-'+mm+'-'+dd;
    const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return date+' '+time;
}

export const getId = () => Math.floor(Math.random() * 1000000).toString();
