export const STOP_REDIRECT = 'STOP_REDIRECT';

export const stopRedirect = () => {
  return {
    type: STOP_REDIRECT,
    redirect: false
  }
}
