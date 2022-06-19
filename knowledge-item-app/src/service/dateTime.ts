export class DateTime {
    ConvertDateToFieldDateAndTime(value: string): string {
        let date = new Date(value);
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = date.getFullYear();
        const hours = date.getUTCHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds()
        return `${dd}/${mm}/${yyyy} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString()}`
    }
}


