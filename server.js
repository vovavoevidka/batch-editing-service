const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const debug = require('debug');
const debugMaster = debug('server:master');
const debugWorker = debug('server:master');


if (cluster.isMaster) {
    debugMaster(`${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        debugWorker(`${worker.process.pid} died`);
    });
} else {
    require('./server-worker-development');

    debugWorker(`${process.pid} started`);
}