import { object } from 'yup';
import { describe, expect, it } from 'vitest';
import { Fields, getSchema } from '../FormValidationService';

describe('Form validations', () => {
    it('passes when form values are valid', () => {
        const fields = createAddressFields().withStreet('MANDATORY');
        const schema = getSchema(fields);
        const formValues = { street: 'x' };

        const result = object(schema).validateSync(formValues, { abortEarly: false });

        expect(result).toBe(formValues);
    });

    it('fails when form values are invalid', () => {
        const fields: Fields = {
            street: { label: 'street', requirement: 'MANDATORY' },
        };
        const schema = getSchema(fields);
        const formValues = { street: '' };

        expect(() =>
            object(schema).validateSync(formValues, { abortEarly: false }),
        ).toThrow('street is missing.');
    });
});
