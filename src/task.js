export default function task(title, description, date, priority) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDate = () => date;
    const getPriority = () => priority;

    return {
        title,
        description,
        date,
        priority,
        getTitle,
        getDescription,
        getDate,
        getPriority,
    };
}