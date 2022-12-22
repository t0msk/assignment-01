import { convertSecondsToTimeUnits } from '../time';

describe('index.ts', () => {
    describe('convertSecondsToTimeUnits', () => {
        describe('example tests', () => {
            it('should be a function', () => {
                expect(typeof convertSecondsToTimeUnits).toBe('function');
            });
        });
        test('test for negative numbers', () => {
            expect(convertSecondsToTimeUnits('-1')).toBe('Invalid input');
        });
        test('test for invalid input', () => {
            expect(convertSecondsToTimeUnits('abc')).toBe('Invalid input');
        });
        test('test for zero', () => {
            expect(convertSecondsToTimeUnits('0')).toBe('0 seconds');
        });
        test('test for 47 seonds from README', () => {
            expect(convertSecondsToTimeUnits('47')).toBe('47 seconds');
        });
        test('test for 2700 seonds from README', () => {
            expect(convertSecondsToTimeUnits('2700')).toBe('45 minutes');
        });
        test('test for 284400 seonds from README', () => {
            expect(convertSecondsToTimeUnits('284400')).toBe('3 days and 7 hours');
        });
    });
});
