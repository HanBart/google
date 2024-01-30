


module.exports = (req, res) => {
  async fetch(req, env) {
    let url = new URL(req.url);
    url.hostname = "https://translate.googleapis.com/";
    return fetch(new Request(url, req));
  },
};
