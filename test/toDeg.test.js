import toDeg from '../src/toDeg';

describe('toDeg', () => {
    it('converts a value to a degree', () => {
        expect(toDeg(35.238965)).toEqual(2019.0439689092252);
    });
});
