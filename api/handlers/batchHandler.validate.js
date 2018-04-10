import Joi from 'joi';
import { batchHandlerSchema } from './batchHandler.schema';

export function batchHandlerValidator() {

    return (req, res, next) => {
        const result = Joi.validate(req.body, batchHandlerSchema);

        if (result.error) {
            // error handling goes here.
            req.error = result.error;
        }

        next();
    }
}