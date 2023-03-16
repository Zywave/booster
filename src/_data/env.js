const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    SITE_ID: process.env.SITE_ID,
    HEAP_ID: process.env.HEAP_ID
};
