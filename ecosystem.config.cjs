module.exports = {
  apps: [
    {
      name: "gateway",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=deployment/services/production/gateway.json --http-body-limit=512000",
      interpreter: "node",
    },
    {
      name: "bff",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=deployment/services/production/bff.json --http-body-limit=512000",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "notification",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=deployment/services/production/notification.json --http-body-limit=512000",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "reads",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=deployment/services/production/reads.json --http-body-limit=512000",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "writes",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=deployment/services/production/writes.json --http-body-limit=512000",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "social-app",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=deployment/services/production/social-app.json --http-body-limit=512000",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    },
    {
      name: "proxy",
      script: "./node_modules/jitar/dist/cli.js",
      args: "start --service=deployment/services/production/proxy.json --http-body-limit=512000",
      interpreter: "node",
      autorestart: true,
      restart_delay: 1000
    }
  ]
};