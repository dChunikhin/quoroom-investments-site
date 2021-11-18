import { string, object } from 'yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export default () => {
    return object({

        name: string()
            .required('Введите имя'),
        phoneNumber: string()
            .nullable(true)
            .test(
                'phone-number',
                'Номер телефона должен быть валидным',
                function (value = '') {
                    if (value) {
                        const result = parsePhoneNumberFromString(value);
                        if (result) {
                            return !!result.isValid();
                        }
                    }
                    return false;
                }
            )
            .required('Номер телефона обязателен'),
        message: string()
            .required('Выберите школу'),
    });
}
