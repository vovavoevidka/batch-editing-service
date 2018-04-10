import request from 'request';
import { stringInject } from '../../utils';

export function batchHandler() {
    return (req, res) => {
        if (req.error) {
            res.send(`Request validation error, ${req.error}`);
        }

        const { endpoint: {url, verb}, payload } = req.body;

        const promises = payload.map(pItem => {
            return new Promise((resolve, reject) => {

                const preparedEndpoint = stringInject(url, pItem.params);

                console.log(preparedEndpoint);

                request({
                    method: verb,
                    uri: preparedEndpoint,
                    json: true,
                    body: pItem.body
                }, function (error, response, body) {
                    if (error) {
                        reject(error);
                    }
                    resolve(body);
                })

            })
        });

        Promise
            .all(promises)
            .then(responses => {
                res.send(responses);
            })
    };
}