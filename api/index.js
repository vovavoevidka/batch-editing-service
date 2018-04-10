import express from 'express';
import { batchHandlerValidator } from "./handlers/batchHandler.validate";
import { batchHandler } from './handlers/batchHandler';

export default function() {
    const router = express.Router();

    router.post(
        '/batch',
        // batchHandlerValidator(),
        batchHandler()
    );

    return router;
}