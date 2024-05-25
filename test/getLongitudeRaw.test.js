import getLongitudeRaw from '../src/getLongitudeRaw';

describe('getLongitudeRaw', () => {
    it('does not convert to decimal if second parameter is set to true', () => {
        expect(getLongitudeRaw({ lng: "71° 0'" }, true)).toEqual("71° 0'");
    });

    it('gets the longitude from a GeoJSON array without conversion', () => {
        expect(getLongitudeRaw(["71° 0'", "71° 0'"], true)).toEqual("71° 0'");
    });
});
