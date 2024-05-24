import { areaConversion } from '../src/constants';

describe('areaConversion', () => {
    it('has equal values for aliases', () => {
        expect(areaConversion.sqm).toEqual(areaConversion.m2);
        expect(areaConversion.sqkm).toEqual(areaConversion.km2);
        expect(areaConversion.sqft).toEqual(areaConversion.ft2);
        expect(areaConversion.sqyd).toEqual(areaConversion.yd2);
        expect(areaConversion.sqin).toEqual(areaConversion.in2);
    });
});
