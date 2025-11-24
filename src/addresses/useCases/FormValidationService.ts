import { string } from 'yup';

export type Field = {
    label: string;
    requirement: 'MANDATORY' | 'OPTIONAL';
    maxLength?: number;
    disabled?: boolean;
    value?: string;
};
export type Fields = Partial<{
    buildingName: Field;
    street: Field;
    districtName: Field;
    postalCode: Field;
    townName: Field;
    regionName: Field;
    country: Field;
}>;

export function getSchema(fields: Fields) {
    return Object.entries(fields).reduce((result, [key, field]) => {
        if (field.requirement !== 'MANDATORY') {
            return result;
        }

        return {
            ...result,
            [key]: string().required(`${field.label} is missing.`),
        };
    }, {});
}
