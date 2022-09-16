# FileForest
#### A simple self-hosted personal file hosting and sharing platform.

---

## Install
> ℹ️ **To build or not to build?**
> 
> The below method will download containers from the latest release, not build them from source! If you want to build from the source code in this repository, follow the [build instructions](#build) below.

Firstly, ensure you have [Docker](https://docs.docker.com/engine/install/) installed - it is required for building and deployment.

Then, download the [`docker-compose-release.yml`](https://raw.githubusercontent.com/ThatOtherAndrew/FileForest/main/docker-compose-release.yml) file using `wget` or an alternative method:
```shell
wget https://raw.githubusercontent.com/ThatOtherAndrew/FileForest/main/docker-compose-release.yml
```
Finally, Use Docker Compose to run the project:
```shell
docker compose up -d
```
And you're done! 🚀

## Build
> ℹ️ **Need a development environment?**
> 
> Follow the instructions in [CONTRIBUTING.md](CONTRIBUTING.md) instead.

If you have [Git](https://git-scm.com/) installed, clone and enter the repository:
```shell
git clone https://github.com/ThatOtherAndrew/FileForest.git
cd FileForest
```
Then, use Docker Compose to build and run the project:
```shell
docker compose up -d --build
```
And that's it! ✨

### Don't have Git?
Instead of running `git clone`, click on the green `Code ▼` button at the top of the [GitHub page](https://github.com/ThatOtherAndrew/FileForest), and select `Download ZIP`. Extract the ZIP file to your preferred location, and run the `cd` command with the appropriate file path. Then, proceed with Docker Compose as above.

## Usage
Instructions coming soon™️ to a README.md near you!
