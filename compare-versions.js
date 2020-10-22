/*
 *如果 version1 > version2 返回 1，
 *如果 version1 < version2 返回 -1，
 *如果两个版本号相同，返回 0。
 */
function compareVersions(currVer, promoteVer) {
  currVer = currVer || "0.0.0";
  promoteVer = promoteVer || "0.0.0";
  if (currVer == promoteVer) {
    console.log(0);
    return false;
  }
  var currVerArr = currVer.split(".");
  var promoteVerArr = promoteVer.split(".");
  var len = Math.max(currVerArr.length, promoteVerArr.length);
  for (var i = 0; i < len; i++) {
    var proVal = ~~promoteVerArr[i],
      curVal = ~~currVerArr[i];
    if (proVal < curVal) {
      console.log(1);
      return false;
    } else if (proVal > curVal) {
      console.log(-1);
      return true;
    }
  }
  return false;
}
// compareVersions("10.1.8", "10.0.4"); // 1
// compareVersions("10.0.1", "10.0.1"); // 0
// compareVersions("10.1.1", "10.2.2"); // -1
