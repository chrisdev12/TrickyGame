const response = {
  success: (res, status, message) => {
    res.status(status || 200).json({
      error: '',
      data: message,
    });
  },
  error: (res, status, message) => {
    res.status(status || 500).json({
      error: message,
      data: '',
    });
  },
};

module.exports = response;
