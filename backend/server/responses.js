exports.success = (res, status, message) => {
  res.status(status || 200).json({
    error: '',
    data: message,
  });
};

exports.error = (res, status, message) => {
  res.status(status || 500).json({
    error: message,
    data: '',
  });
};
