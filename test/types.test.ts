import isUtf8 from '../src';

describe('Types', () => {
    it('Buffer', () => {
        expect(isUtf8(Buffer.from([0xd0, 0x90]))).toBeTruthy();
    });

    it('Uint8Array', () => {
        expect(isUtf8(new Uint8Array([0xd0, 0x90]))).toBeTruthy();
    });
});
