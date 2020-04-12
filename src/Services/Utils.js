export function authHeader() {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
      return { Authorization: `Bearer ${currentUser.token}` };
  } else {
      return {};
  }
}