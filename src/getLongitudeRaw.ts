import type { GeolibInputCoordinates, GeolibLongitudeInputValue } from './types';
import { longitudeKeys } from './constants';
import getCoordinateKey from './getCoordinateKey';

const getLongitudeRaw = (point: GeolibInputCoordinates): GeolibLongitudeInputValue => {
    const latKey = getCoordinateKey(point, longitudeKeys);

    if (typeof latKey === 'undefined' || latKey === null) {
        throw new Error('Longitude key not found');
    }

    return point[latKey as keyof GeolibInputCoordinates];
};

export default getLongitudeRaw;
