var config = {};

config.amqp = {
    exchange: 'ul-exchange',
    host: 'ul-rabbitmq',
    options: {durable: true},
    port: 5672,
    queue: 'ulqueque'
};

config.defaultKey = 'ulkey';
config.defaultTransport = 'MQTT';

config.http = {
    port: 27896
};

config.iota = {
    contextBroker: {
        host: 'ul-orion',
        port: '1026'
    },
    defaultResource: '/iot/d',
    defaultType: 'IOT-UL',
    deviceRegistrationDuration: 'P1Y',
    deviceRegistry: {
        type: 'mongodb'
    },
    logLevel: 'DEBUG',
    mongodb: {
        host: 'mongo',
        port: '27017',
        db: 'a-ul'
    },
    providerUrl: 'https://iot-r-ul.lab.fiware.org:24061',
    server: {
        port: 24061
    },
    service: 'ul',
    subservice: '/',
    timestamp: true,
    types: {}
};

config.mqtt = {
    host: 'ul-mosquitto',
    port: 1883,
    qos: 0,
    retain: false
};

module.exports = config;
