import { sexagesimalPattern } from './constants';

const isSexagesimal = (value: any): boolean =>
    sexagesimalPattern.test(value.toString().trim());

export default isSexagesimal;
