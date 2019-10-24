function makeListAffiliates ({ affiliatesDb }) {
    return function listAffiliates ({ userId } = {} ) {
        if (!userId) {
            throw Error('UserID is required to get affiliates.')
        }
    }
}

module.exports = makeListAffiliates;