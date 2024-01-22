export default (err, req, res, next) => {
  console.error(err);

  // joi error
  if (err.name === "ValidationError") {
    return res.status(400).json({ errorMessage: err.message });
  }

  // 외부 error
  return res
    .status(500)
    .json({ errorMessage: "서버에서 에러가 발생했습니다." });
};
