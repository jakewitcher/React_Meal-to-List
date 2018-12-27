export const onStartLogin = () => ({
    type: 'ON_START_LOGIN',
});

export const onLogin = (uid) => ({
    type: 'ON_LOGIN',
    uid,
});

export const onStartLogout = () => ({
    type: 'ON_START_LOGOUT',
});

export const onLogout = () => ({
    type: 'ON_LOGOUT',
});