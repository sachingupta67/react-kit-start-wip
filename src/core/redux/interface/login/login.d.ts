export interface ILoginPayload {
  userName: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
}

interface ILoginInitialState {
  isLoggedIn: boolean;
  email: string;
  password: string;
  id: string;
  isLoading: boolean;
  isShowSelectOrg: boolean;
  selectedOrg: { id: number; name: string };
  accessToken: string;
  orgList: array<{ id: number; name: string }>;
  isOrgLoading: boolean;
  details: { id: number; firstName: string; lastName: string; email: string };
}

interface ICommonInitialState {
  success: string;
  err: { status: number; msg: string };
}

interface IUserDetailsResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}

export type IGetOrgResponse = array<{ id: number; name: string }>;
