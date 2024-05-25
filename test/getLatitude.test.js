import getLatitude from '../src/getLatitude';

describe('getLatitude', () => {
    it('gets the latitude for a point', () => {
        expect(getLatitude({ lat: 1 })).toEqual(1);
    });

    it('converts the latitude for a point to decimal', () => {
        expect(getLatitude({ lat: "71° 0'" })).toEqual(71);
    });

    it('gets the latitude from a GeoJSON array', () => {
        expect(getLatitude([1, 2])).toEqual(2);
    });
});
