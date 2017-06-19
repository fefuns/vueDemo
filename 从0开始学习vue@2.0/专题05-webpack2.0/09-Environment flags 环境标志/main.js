/**
 *  如果是在windows自带的CMD中，执行以下命令
 *  $ set DEBUG=true
 *  $ webpack-dev-serve
 *
 *  如果是在 git bash 或者 Linux 或者 Mac 里, 执行以下命令
 *  env DEBUG=true webpack-dev-server
 */

document.write('<h1>Hello World</h1>');

if (__DEV__) {
    document.write(new Date());
}
