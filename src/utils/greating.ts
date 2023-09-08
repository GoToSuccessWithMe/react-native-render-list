export const getGreeting = (userName: string) => {
  const currentHour = new Date().getHours();

  if (currentHour >= 4 && currentHour < 12) {
    return `Good morning - ${userName}`;
  } else if (currentHour >= 12 && currentHour < 16) {
    return `Good afternoon - ${userName}`;
  } else {
    return `Good night - ${userName}`;
  }
};
