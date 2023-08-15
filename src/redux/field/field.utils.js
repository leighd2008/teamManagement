export const addEventToSchedule = (schedule, eventToAdd) => {
  return [...schedule, { ...eventToAdd }];
}