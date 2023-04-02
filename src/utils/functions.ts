export function convertTimestampToUSDateTime(timestamp: number): string {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  const formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  return formattedDate + " " + formattedTime + " " + amOrPm;
}
export const getColorStatus = (status: string) => {
  if (status == "Open") return "#ECF026";
  else if (status == "Finished") return "#40E684";
  else return "#FFC039";
};
