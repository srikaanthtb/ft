const requestMultipleUrls = require('./requestMultipleUrls');

describe('Global', () => {
    const urls = [
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
        ];

    describe('Working request', () => {
        test('Fulfills a promise', () => {
            return expect(requestMultipleUrls(urls)).resolves.not.toThrow();
        })

        it('Returns an array of JSON', () => {    
            let result = requestMultipleUrls(urls);
            expect.assertions(1);
            return expect(result).resolves.toBeInstanceOf(Array);
        });
    })

    describe('Broken Function', () => {
        it('Returns a meaningful error if a URL does not load (or not exsist)', () => {
            result = requestMultipleUrls([1,2,3])
            return expect(result).resolves.toContain('One or more URLs failed to load with the following')
        });
    });
});
