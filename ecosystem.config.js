module.exports = {
    apps: [{
      name: 'RATOS',
      script: "./src/server.js",
      instances: 1,
      watch: false,
      env_dev: {
        NODE_ENV: 'development'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
  };