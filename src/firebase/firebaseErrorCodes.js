const errorCodes = {
  'auth/app-deleted': 'That combination of email and password does not match our records!',
  'auth/app-not-authorized': 'Oops! Something went wrong!',
  'auth/argument-error': 'Oops! Something went wrong!',
  'auth/invalid-api-key': 'Oops! Something went wrong!',
  'auth/invalid-user-token': 'Unauthorized access!',
  'auth/invalid-tenant-id': 'Oops! Something went wrong!',
  'auth/network-request-failed': 'Network error occured. Please try again!',
  'auth/operation-not-allowed': 'Oops! Something went wrong!',
  'auth/requires-recent-login': 'There is some suspicious login activity associated with this account. Please try again after some time!',
  'auth/too-many-requests': 'There is some suspicious login activity from this device. Access Denied!',
  'auth/unauthorized-domain': 'Oops! Something went wrong!',
  'auth/user-disabled': 'Your account has been disabled!',
  'auth/user-token-expired': 'Something seems wrong here! Please try again!',
  'auth/web-storage-unsupported': 'Kindly enable web storage permission and try again!'
};

export default errorCodes;
