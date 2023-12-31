export const convertToMinute = (seconds = 0) => {
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
  return `${extraSeconds} : ${minutes}`;
};

export const getRandomVideoes = (arr, size = 20) => {
  if (arr.length == 0) {
    return [];
  }
  const randomArr = [];
  for (let i = 0; i < size; i++) {
    const pickIndex = Math.floor(Math.random() * arr.length) + 0;
    if (randomArr.indexOf(pickIndex) === -1) randomArr.push(arr[pickIndex]);
  }
  return randomArr;
};
export const shortNumber = (num = 0) => {
  var suffixes = ["", "هزار", "میلیون", "میلیارد", "ترلیون"];
  var suffixNum = Math.floor(("" + num).length / 3.1);
  var shortValue = parseFloat(
    (suffixNum != 0 ? num / Math.pow(1000, suffixNum) : num).toPrecision(2)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};
