import getLatitudeRaw from '../src/getLatitudeRaw';

describe('getLatitudeRaw', () => {
    it('does not convert to decimal if second parameter is set to true', () => {
        expect(getLatitudeRaw({ lat: "71° 0'" }, true)).toEqual("71° 0'");
    });

    it('gets the latitude from a GeoJSON array without conversion', () => {
        expect(getLatitudeRaw(["71° 0'", "71° 0'"], true)).toEqual("71° 0'");
    });
});
