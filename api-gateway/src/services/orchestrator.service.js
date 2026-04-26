import axios from 'axios';
import ENV from '../config/env.js';
import ApiError from '../utils/ApiError.js';

export const startPayment = async (data, requestId) => {
    try {
        const res = await axios.post(
            `${ENV.ORCHESTRATOR_URL}/start-payment`,
            data,
            {
                headers: {
                    'x-request-id': requestId
                },
                timeout: 3000
            }
        );

        return res.data;

    } catch (err) {
        throw new ApiError(502, "Orchestrator unavailable");
    }
};