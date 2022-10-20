interface IUserDetailsInitialState {
  details: { id: number; firstName: string; lastName: string; email: string; roles: string[] };
  isGetUserDetailsLoading: boolean;
}

export { IUserDetailsInitialState };
