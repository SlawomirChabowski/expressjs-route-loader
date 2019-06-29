exports._404 = (req, res) => {
  res.status(404);
  res.send(`
    <h1>Error 404</h1>
    <p>Could not find the following route:
      <em>${req.originalUrl}</em>
    </p>
  `);
};
