const faker = require('faker');

function makeFakeAffiliate(overrides) {
    
    const affiliate = {
        affiliateId: faker.random.number,
        orgName: faker.company.companyName,
        orgCityName: faker.address.city,
        orgContactName: faker.name.findName,
        ctryDescription: faker.address.country,
        orgCurrency: faker.finance.currencyCode
    }

    return {
        ...affiliate,
        ...overrides
    }
}

module.exports = makeFakeAffiliate;