function getApiVersion() {
    if (process.env.API_VERSION === undefined) {
        require('dotenv').config();
    };
    return process.env.API_VERSION || 'v1';
}

function getApiPrefix () {
    if (process.env.API_PREFIX === undefined) {
        require('dotenv').config();
    };
    return process.env.API_PREFIX || '';
}

export { getApiVersion, getApiPrefix}