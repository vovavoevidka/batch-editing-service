import Joi from 'joi';


const batchHandlerEndpointSchema = Joi.object().keys({
    url: Joi.string(), // add ability to check for parametrised url
    verb: Joi.string().valid(['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'])
});

// todo: extend this valudation
const batchHandlerPayloadSchema = Joi.array();

export const batchHandlerSchema = Joi.object().keys({
    endpoint: batchHandlerEndpointSchema,
    payload: batchHandlerPayloadSchema
}).with('username', 'birthyear').without('password', 'access_token');