// Config file. All the important variables goes here
const NODE_ENV = process.env.NODE_ENV;
const config = {
  DEV: {
    API_URL: "https://example.com/api/"
  },
  PROD: {
    API_URL: "https://example.com/api/"
  }
}

const ENV = {};
if(NODE_ENV === "production") ENV = JSON.stringify(config.PROD);
else ENV = JSON.stringify(config.DEV);

export default ENV;