1. Install docker as it described at https://docs.docker.com/install/
2. Prepare default network for environment
```bash
docker network create --attachable --opt com.docker.network.driver.mtu=1450 iot-ready
```
3. Prepare default locations for persisting data or override it in docker-compose file.
```bash
sudo mkdir -p /opt/data/{nginx,mongo,json,ul}
sudo chown -R 1833:1833 /opt/data/{json,ul}
sudo chown -R 999:999 /opt/data/mongo
```
4. Clone repository
```bash
git clone -b validators https://github.com/FIWARE-Ops/Marketplace.git
```

5. Run environments
```bash
docker-compose up -d
```
