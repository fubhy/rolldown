export const StateCode = {
  SUCCESS: 'success',
  ERROR: 'error',
  WAITING: 'waiting',
};

export function getStateCodeFromHttpStatus(code) {
  if (code === 200) return StateCode.SUCCESS;
  if (code >= 400) return StateCode.ERROR;
  return StateCode.WAITING;
}
