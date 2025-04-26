FROM php:8.2.28-fpm

COPY php.ini /usr/local/etc/php/

RUN apt update \
  && apt install -y zlib1g-dev mariadb-client vim libzip-dev nodejs npm && npm install n -g && n 18.0.0\
  && docker-php-ext-install zip pdo_mysql

RUN echo 'alias la="ls -la"' >> ~/.bashrc
RUN echo 'alias ll="ls -la"' >> ~/.bashrc
RUN echo 'alias rm="rm -i"' >> ~/.bashrc
RUN echo 'alias cp="cp -i"' >> ~/.bashrc
RUN echo 'alias mv="mv -i"' >> ~/.bashrc

#Composer install
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

WORKDIR /var/www