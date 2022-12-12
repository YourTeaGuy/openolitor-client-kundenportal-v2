export function formatDate(
    date: Date,
    stringified: boolean = false,
    langFormat: string =   'de-DE',
    yearFormat: string  =  '2-digit',
    monthFormat: string =   '2-digit',
    dayFormat: string =  '2-digit',
    weekdayFormat?: string,
): string {
    let options ={
        weekday:  weekdayFormat,
        year:  yearFormat,
        month:   monthFormat,
        day: dayFormat,
    };
    if (stringified) {
        options = {
            weekday:  'long',
            year:  'numeric',
            month:   'long',
            day: 'numeric',
        }
        
    }
    let lang = langFormat; 
    let stringifiedDate = date.toLocaleDateString(lang, options);
    return stringifiedDate;
}

export function formatTime(
    date: Date,
    hourFormat: string = "2-digit",
    minuteFormat: string = "2-digit",
): string{
    let options = {
        hour: hourFormat,
        minute: minuteFormat,
    }
// show only hours and minutes, use options with the default locale - use an empty array
    let stringifiedTime = date.toLocaleTimeString([], options)
    return stringifiedTime
}