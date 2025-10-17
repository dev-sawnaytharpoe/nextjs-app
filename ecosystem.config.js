module.exports = {
  apps: [
    {
      name: 'nextjs-pm2-app', // A unique name for your application
      script: 'npm', // Use npm to run the start script defined in package.json
      args: 'start -p 3000', // The argument to pass to npm, which is "start" for Next.js production server
      instances: 1, // Use 'max' to utilize all available CPU cores for cluster mode
      exec_mode: 'cluster', // Run in cluster mode for better performance and fault tolerance
      autorestart: true, // Automatically restart the app if it crashes
      watch: false, // Set to true if you want PM2 to watch for file changes and restart
      max_memory_restart: '1G', // Restart the app if memory usage exceeds 1GB
      error_file: './logs/error.log', // Path for error logs
      out_file: './logs/out.log', // Path for standard output logs
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // Format for timestamps in logs
      env: {
        NODE_ENV: 'production', // Set the environment to production
        // Add other environment variables as needed, e.g., DATABASE_URL, API_KEY
      },
    },
  ],
};
