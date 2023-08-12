/** @type {import('next').NextConfig} */

const path = require('path');

console.log(path.join(__dirname, 'src/app'));

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app')],
  },
};

module.exports = nextConfig;
