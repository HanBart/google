const { createProxyMiddleware } = require("http-proxy-middleware");

res=async fetch(req, env) {
    let url = new URL(req.url);
    url.hostname = "translate.googleapis.com";
    return fetch(new Request(url, req));
  },
module.exports = (req, res) => {
  let target = "translate.googleapis.com";//your website url

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://google.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
