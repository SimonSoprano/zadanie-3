class DateService {

    static getDateFormatted_ISO_8601(){

         /**
          *  Metoda getDate() z zadania
          *  Przykładowy Format metody która zwraca date oraz czas razem ze strefą czasową
          *  [1900-01-01T01:00:00+01:00]
         **/

        const currentDate = new Date();

        const isoDateTime = currentDate.toISOString().replace('Z','');

        const offset =  -currentDate.getTimezoneOffset();
        const sign = offset >= 0 ? '+' : '-';
        const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
        const minutes = String(Math.abs(offset) % 60).padStart(2, '0');

        return `${ isoDateTime }${ sign }${ hours }:${ minutes }`;

    }
}
module.exports = DateService;