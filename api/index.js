import express from 'express';
import { batchHandler } from './handlers/batchHandler';

export default function() {
    const router = express.Router();

    router.post('./batch', batchHandler());

    return router;
}