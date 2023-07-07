export default {
    api:{
        baseUrl:process.env.API_BASE_URL
    },
    application_logging: {
        level: process.env.LOG_LEVEL || 'info',
        console: process.env.LOG_ENABLE_CONSOLE !== 'false'
    },
}