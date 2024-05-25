import getLongitude from '../src/getLongitude';

describe('getLongitude', () => {
    it('gets the longitude for a point', () => {
        expect(getLongitude({ lng: 1 })).toEqual(1);
    });

    it('converts the longitude for a point to decimal', () => {
        expect(getLongitude({ lng: "71° 0'" })).toEqual(71);
    });

    it('gets the longitude from a GeoJSON array', () => {
        expect(getLongitude([1, 2])).toEqual(1);
    });
});
