import { getApiPrefix, getApiVersion } from "src/Interface"
beforeEach(() => {
    process.env.API_VERSION = undefined
    process.env.API_PREFIX = undefined
})

describe('interface/utils/constants', () => {
    test('Should return API_VERSION informed in .env', () => {
        const version = getApiVersion()
        const envVersion = process.env.API_VERSION || 'v1'

        expect(version).toEqual(envVersion)
    })

    test('Should return API_PREFIX informed in .env', () => {
        const prefix = getApiPrefix()
        const envPrefix = process.env.API_PREFIX || ''

        expect(prefix).toEqual(envPrefix)
    })
})