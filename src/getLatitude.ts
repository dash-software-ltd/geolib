import { GeolibInputCoordinates, LatitudeKeys } from './types';
import { latitudeKeys } from './constants';
import getCoordinateKey from './getCoordinateKey';
import toDecimal from './toDecimal';

const getLatitude = (point: GeolibInputCoordinates): number => {
    const latKey = getCoordinateKey(point, latitudeKeys);

    if (typeof latKey === 'undefined' || latKey === null) {
        throw new Error('Latitude key not found');
    }

    const value = point[latKey as keyof LatitudeKeys];

    return toDecimal(value);
};

export default getLatitude;
