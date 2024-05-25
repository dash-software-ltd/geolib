import { GeolibInputCoordinates, GeolibLatitudeInputValue } from './types';
import { latitudeKeys } from './constants';
import getCoordinateKey from './getCoordinateKey';

const getLatitudeRaw = (point: GeolibInputCoordinates): GeolibLatitudeInputValue => {
    const latKey = getCoordinateKey(point, latitudeKeys);

    if (typeof latKey === 'undefined' || latKey === null) {
        throw new Error('Latitude key not found');
    }

    return point[latKey as keyof GeolibInputCoordinates];
};

export default getLatitudeRaw;
