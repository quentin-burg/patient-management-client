type IdentityState = {
  me: boolean;
};

export default (state: IdentityState = { me: false }, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
