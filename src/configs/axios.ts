import  axiosImport from 'axios';
import config from './config';

export const axios = axiosImport.create({
    baseURL: config.api.baseUrl,
});

