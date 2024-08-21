const sql = require("mssql");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const config = {
  user: process.env.NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,
  options: {
    encrypt: true, // For security; set to true for Azure
    trustServerCertificate: false // Change to true if needed
  }
  //   driver: process.env.DRIVER,
};
// Database connection
function dbConnection() {
  // Connecting to Ms Sql database
  return new Promise((resolve, reject) => {
    try {
      sql.connect(config, (err) => {
        if (err) {
          reject("Failed to open a SQL Database connection.", err.stack);
        }
        resolve("SQL connected");
      });
    } catch (err) {
      reject("Failed to connect to a SQL Database connection.", err.message);
    }
  });
}
module.exports = dbConnection;
