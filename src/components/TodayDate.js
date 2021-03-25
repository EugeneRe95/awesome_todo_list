
function TodayDate() {
  return [
    new Date().getDate() < 10 ? "0" + new Date().getDate() : new Date().getDate(),
    new Date().getMonth() + 1 < 10 ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1,
    new Date().getFullYear()
  ]
}

export default TodayDate
