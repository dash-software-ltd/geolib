import { GeolibInputCoordinates, LongitudeKeys } from './types';
import { longitudeKeys } from './constants';
import getCoordinateKey from './getCoordinateKey';
import toDecimal from './toDecimal';

const getLongitude = (point: GeolibInputCoordinates): number => {
    const latKey = getCoordinateKey(point, longitudeKeys);

    if (typeof latKey === 'undefined' || latKey === null) {
        throw new Error('Longitude key not found');
    }

    const value = point[latKey as keyof LongitudeKeys];

    return toDecimal(value);
};

export default getLongitude;
