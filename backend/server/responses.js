const response = {
  success: (res, status, message) => {
    res.status(status || 200).json({
      error: false,
      success: message,
    });
  },
  error: (res, status, message) => {
    res.status(status || 500).json({
      error: message,
      success: false,
    });
  },
};

module.exports = response;
