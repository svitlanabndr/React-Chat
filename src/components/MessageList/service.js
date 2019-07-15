export const makeMessageListProps = (data) => {
    let props = [];
    let previousDay;
    data.forEach(object => {
        let currentDay = new Date(object.created_at).getDate();
        if (previousDay !== currentDay)
            props.push({
                break_date: getDateFromFormattedDate(object.created_at)
            });
        previousDay = currentDay;
        const currentMessage = {
            id: object.id,
            avatar: object.avatar,
            created_at: object.created_at,
            message: object.message,
            is_liked: object.is_liked,
            is_mine: object.user === 'Sveta'
        }
        props.push(currentMessage);
    });
    return props;
}

const getDateFromFormattedDate = formattedDate => formattedDate.split(' ')[0];
