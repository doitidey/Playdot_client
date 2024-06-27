// 매월 첫번째 날과 마지막 날
const dateArray = [];
const date = new Date();
const startDate = new Date(date.getFullYear(), date.getMonth(), 2);
const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);

// 매월 첫번째 날부터 매월 마지막 날까지 전부 계산
while (startDate <= endDate) {
  dateArray.push(startDate.toISOString().split("T")[0]);
  startDate.setDate(startDate.getDate() + 1);
}

// 첫번째 주
const firstWeek = dateArray.slice(0, 6);
export const firstStartDate = firstWeek.splice(0, 1).join();
export const firstEndDate = firstWeek.splice(4, 4).join();
export const firstStartDateSub = firstStartDate.substring(5);
export const firstEndDateSub = firstEndDate.substring(5);

// 두번째 주
const secondWeek = dateArray.slice(7, 13);
export const secondStartDate = secondWeek.splice(0, 1).join();
export const secondEndDate = secondWeek.splice(4, 4).join();
export const secondStartDateSub = secondStartDate.substring(5);
export const secondEndDateSub = secondEndDate.substring(5);

// 세번째 주
const thirdWeek = dateArray.slice(14, 20);
export const thirdStartDate = thirdWeek.splice(0, 1).join();
export const thirdEndDate = thirdWeek.splice(4, 4).join();
export const thirdStartDateSub = thirdStartDate.substring(5);
export const thirdEndDateSub = thirdEndDate.substring(5);

// 네번째 주
const fourthWeek = dateArray.slice(21, 27);
export const fourthStartDate = fourthWeek.splice(0, 1).join();
export const fourthEndDate = fourthWeek.splice(4, 4).join();
export const fourthStartDateSub = fourthStartDate.substring(5);
export const fourthEndDateSub = fourthEndDate.substring(5);

// 다섯번째 주
const fifthWeek = dateArray.slice(28, 30);
export const fifthStartDate = fifthWeek.splice(0, 1).join();
export const fifthEndDate = fifthWeek[fifthWeek.length - 1];
export const fifthStartDateSub = fifthStartDate.substring(5);
export const fifthEndDateSub = fifthEndDate.substring(5);
