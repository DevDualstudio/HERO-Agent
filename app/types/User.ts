import { UserAddress } from './UserAddress';

export type User = {
  id: number;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  roleId: number;
  profilePictureId: string | null;
  timeZoneCode: string;
  failedLoginAttempts: number;
  hasToResetPassword: boolean;
  isActivationPending: BlobOptions;
  isActive: boolean;
  isSysAdmin: boolean;
  language: 'EN';
  hash: string;
  role: {
    roleId: number;
    code: string;
    name: string;
    defaultPath: string | null;
    isActive: boolean;
    isSysAdmin: boolean;
    resources: null;
  };
  agentProfile: {
    userId: number;
    idCardFrontFileId: number;
    idCardBackFileId: number;
    comments: string | null;
    agentStatusCode: string;
    reviewedByOperatorUserId: number | null;
    isFormComplete: boolean;
    isLegalBackgroundCheckDone: boolean;
    isMedicalExaminationDone: boolean;
    isProfileAnalysisDone: boolean;
    isInitialWizardComplete: boolean;
    reviewedByValidatorUserId: number | null;
  };
  userProfile: UserAddress;
  profilePictureUrl: string | null;
};
