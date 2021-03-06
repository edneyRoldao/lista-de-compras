import moment from "moment";

moment.defaultFormat  = process.env.DEFAULT_DATE_FORMAT;

export default class DataUtil {

    checkFormatDate(dateAsString) {
        return moment(dateAsString, moment.defaultFormat, true).isValid();
    }

    getStartDayOfDate(dateAsString) {
        return moment(dateAsString, moment.defaultFormat).startOf('day').toDate();
    }

    getEndDayOfDate(dateAsString) {
        return moment(dateAsString, moment.defaultFormat).endOf('day').toDate();
    }

    getDefaultFormat() {
        return moment.defaultFormat;
    }

    isCodeActivationDateValid(date, minutes = 120) {
        const agora = moment(new Date());
        const dataAtivacao = moment(date);
        const duracao = moment.duration(agora.diff(dataAtivacao));
        const duracaoMinutos = duracao.asMinutes();

        return duracaoMinutos < minutes;
    }

}
