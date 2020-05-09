import { readFileSync } from 'fs';
import isUtf8 from '../src';

function getText(id: string): Buffer {
    return readFileSync(`./test/texts/${id}.txt`);
}

describe('Examples', () => {
    it('windows1251', () => {
        expect(isUtf8(getText('win1251'))).toBeFalsy();
    });

    it('koi8r', () => {
        expect(isUtf8(getText('koi8r'))).toBeFalsy();
    });

    it('utf8', () => {
        expect(isUtf8(getText('utf8'))).toBeTruthy();
    });

    it('ansi', () => {
        expect(isUtf8(getText('ansi'))).toBeTruthy();
    });

    it('undefined', () => {
        expect(isUtf8()).toBeFalsy();
    });
});
