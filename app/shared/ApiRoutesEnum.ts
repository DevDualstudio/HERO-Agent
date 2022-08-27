const ApiRoutesEnum = {
  SEND_VERIFICATION_CODE: '/auth/login-phone',
  LOGIN_PHONE_CODE: '/auth/verify-phone-agent',
  UPDATE_PROFILE: '/users/update-profile',
  APPLY_AGENT: '/users/apply-agent',
  APPLY_AGENT_STATUS: '/users/apply-agent-status',
  UPLOAD_FILE: '/files',
  PAYMENT_METHOD: '/payment-method',
  GET_STATES_AND_ZONES: '/zones/get-states',
  WORKING_ZONES: '/agents/working-zones',
  SET_WIZARD_COMPLETE: '/agents/set-wizard-complete',
  IS_AVAILABLE: '/agents/available',
  SET_AVAILABLE: '/agents/set-available',
};
export default ApiRoutesEnum;
