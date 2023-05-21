const fs = require('fs');

// Logger middleware function
const logger = (req, res, next) => {
  const startTime = new Date().getTime();

  fs.appendFileSync('logger.txt', `Method: ${req.method}\n`, { encoding: 'utf-8' });
  fs.appendFileSync('logger.txt', `Date: ${new Date()}\n`, { encoding: 'utf-8' });
  fs.appendFileSync('logger.txt', `HTTP Version: ${req.httpVersion}\n`, { encoding: 'utf-8' });
  fs.appendFileSync('logger.txt', `URL Accessed: ${req.url}\n`, { encoding: 'utf-8' });

  next();

  const endTime = new Date().getTime();
  const responseTime = endTime - startTime;
  
  fs.appendFileSync('logger.txt', `Response Status: ${res.statusCode}\n`, { encoding: 'utf-8' });
  fs.appendFileSync('logger.txt', `Time Taken: ${responseTime}ms\n`, { encoding: 'utf-8' });
  fs.appendFileSync('logger.txt', '===============================\n');
};

module.exports = {
    logger
}
