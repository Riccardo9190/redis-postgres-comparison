# redis-postgres-comparison

Simple comparison of data retrieval efficiency between Redis and PostgreSQL (or SQL databases, in general), made through a simple Redis architecture demonstration.

<img src="https://github.com/Riccardo9190/redis-postgres-comparison/blob/master/public/basic_redis_archtecture.jpg" width="1000" height="600"/> 

This project showcases the effectiveness of data retrieval by utilizing a key-value structure in Redis caching (RAM memory).

### Result:

Based on the Redis architecture, we ensure that your cache-based search efficiency is more effective within the project context compared to PostgreSQL.

While Redis performs the search only once and caches the data, PostgreSQL repeats the same search multiple times, resulting in a longer search execution time, as observed in the execution of the search file of this application:

<img src="https://github.com/Riccardo9190/redis-postgres-comparison/blob/master/public/data-fetching-time-comparison.png"/>

### Technologies Used:

- Node.js
- PostgreSQL
- Redis

