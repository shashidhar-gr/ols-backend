const makeFakeAffiliate  = require('../_test_/fixtures/affiliate');
const makeAffiliate = require('./index');

describe('Affiliate', () => {
    it('must have affiliateId', () => {
        const affiliate = makeFakeAffiliate({affiliateId: null})
        expect(() => makeAffiliate(affiliate)).toThrow('Affiliate must have affiliateId')
    })
})