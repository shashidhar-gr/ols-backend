const makeListAffiliates = require('./list-affiliates');

describe('get affiliates', () => {
    let listAffiliates;

    beforeAll(() => {
        listAffiliates = makeListAffiliates()
    })

    it('requires userId', () => {
        expect(listAffiliates()).rejects.toThrow('UserID is required to get affiliates.')
    })
})