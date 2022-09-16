# Contributing

Thank you very much for taking an interest in my project! Whether you're looking to contribute to the code, submit bug reports or feature requests, or you just want to play around with the source code, here's hopefully everything you need to get started.

## Dev Environment
Building a development environment is very similar to the regular [build instructions](README.md#build), however the `docker-compose-dev.yml` file is used instead. This grants useful developer features such as hot reloading, while also providing additional security by protecting from access outside of localhost.

```shell
git clone https://github.com/ThatOtherAndrew/FileForest.git
cd FileForest
docker compose -f docker-compose-dev.yml up -d --build
```
Now try editing the frontend or backend source code under the `src/` directories, and watch the magic happen at [localhost](http://localhost/)

## Issues and Pull Requests
I don't have any templates set up for these (and probably won't have for quite a while), so just have a bit of common sense please! Provide any information you think would be relevant or helpful, and thoroughly check and test your code before making a pull request.

## Contact
If you wish to contact me about this project, please do not hesitate to do so! You can get in touch either via [email](mailto:stroev.andrew@gmail.com) or through Discord at [ThatOtherAndrew#8134](https://discord.com/users/650459420635168769).
