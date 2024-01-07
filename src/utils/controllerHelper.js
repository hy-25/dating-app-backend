function wrapWithTryCache(controller) {
  return async function (req, res, next) {
    try {
      await controller(req, res, next)
    } catch (err) {
      res.status(400).json({ error: err })
    }
  }
}

module.exports = {
  wrapWithTryCache,
}
