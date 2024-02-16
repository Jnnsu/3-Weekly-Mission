import { TIMES } from './constant';

export const formatDate = link => {
  const now = new Date();
  const created = new Date(link.created_at).getTime();
  const diffInMilliseconds = now - created;
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInMinutes < 2) {
    return TIMES.ONE_MINUTE_AGO;
  }
  if (diffInMinutes <= 59) {
    return diffInMinutes + TIMES.MINUTES_AGO;
  }
  if (diffInHours < 2) {
    return TIMES.ONE_HOUR_AGO;
  }
  if (diffInHours <= 23) {
    return diffInHours + TIMES.HOURS_AGO;
  }
  if (diffInDays < 2) {
    return TIMES.ONE_DAY_AGO;
  }
  if (diffInDays <= 30) {
    return diffInDays + TIMES.DAYS_AGO;
  }
  if (diffInMonths < 2) {
    return TIMES.ONE_MONTH_AGO;
  }
  if (diffInMonths <= 11) {
    return diffInMonths + TIMES.MINUTES_AGO;
  }
  if (diffInYears < 2) {
    return TIMES.ONE_YEAR_AGO;
  }

  return diffInYears + TIMES.YEARS_AGO;
};

export const returnUploadDate = link => {
  const now = new Date(link.created_at);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return `${year}. ${month}. ${day}`;
};
