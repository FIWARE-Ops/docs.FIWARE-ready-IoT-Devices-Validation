var config = {};

config.amqp = {
    exchange: 'json-exchange',
    host: 'json-rabbitmq',
    options: {durable: true},
    port: 5672,
    queue: 'jsonqueque'
};

config.defaultKey = 'jsonkey';
config.defaultTransport = 'MQTT';

config.http = {
    port: 27896
};

config.iota = {
    contextBroker: {
        host: 'json-orion',
        port: '1026'
    },
    defaultResource: '/iot/d',
    defaultType: 'IOT-JSON',
    deviceRegistrationDuration: 'P1Y',
    deviceRegistry: {
        type: 'mongodb'
    },
    logLevel: 'DEBUG',
    mongodb: {
        host: 'mongo',
        port: '27017',
        db: 'a-json'
    },
    providerUrl: 'https://iot-r-json.lab.fiware.org:24061',
    server: {
        port: 24061
    },
    service: 'json',
    subservice: '/',
    timestamp: true,
    types: {}
};

config.mqtt = {
    host: 'json-mosquitto',
    port: 1883,
    qos: 0,
    retain: false
};

module.exports = config;
