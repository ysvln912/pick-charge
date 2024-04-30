export default function formatTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const formatHours =
    hours >= 12
      ? `오후 ${hours === 12 ? hours : hours - 12}`
      : `오전 ${hours === 0 ? hours + 12 : hours}`;
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const createdAt = `${formatHours}:${minutes}`;
  return createdAt;
}
