import { ModuleMap } from "jest-haste-map"

function buildMakeAffiliate({}) {
    return function makeAffiliate({
        affiliateId,
        orgName,
        orgCityName,
        orgContactName,
        ctryDescription,
        orgCurrency
    } = {}) {
        if(!affiliateId) {
            throw new Error('Affiliate must have affiliateId')
        }
        if(!orgName) {
            throw new Error('Affiliate must have orgName')
        }
        if(!orgCityName) {
            throw new Error('Affiliate must have orgCityName')
        }
        if(!orgContactName) {
            throw new Error('Affiliate must have orgContactName')
        }
        if(!ctryDescription) {
            throw new Error('Affiliate must have ctryDescription')
        }
        if(!orgCurrency) {
            throw new Error('Affiliate must have orgCurrency')
        }

        return Object.freeze({
            getAffiliateId: () => affiliateId,
            getOrgName: () => orgName,
            getOrgCityName: () => orgCityName,
            getOrgContactName: () => orgContactName,
            getCtryDescription: () => ctryDescription,
            getOrgCurrency: () => orgCurrency
        })
    }
}

module.exports = makeAffiliate;