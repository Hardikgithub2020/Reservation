export const GET_REGISTRATION_SUCCESS ='GET_REGISTRATION_SUCCESS';
export const GET_REGISTRATION_FAILURE ='GET_REGISTRATION_FAILURE';
export const GET_APPLICATION_SUCCESS ='GET_APPLICATION_SUCCESS';
export const GET_APPLICATION_FAILURE ='GET_APPLICATION_FAILURE';
export const GET_LOGIN_SUCCESS ='GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILURE ='GET_LOGIN_FAILURE';


export const getLogInSuccess = (LogInfo) =>({
    type : GET_LOGIN_SUCCESS,
    payload: LogInfo,
})

export const getLogInFailure = () =>({
    type : GET_LOGIN_FAILURE
})

export const getRegistrationSuccess = (userInfo) =>({
    type : GET_REGISTRATION_SUCCESS,
    payload: userInfo,
})

export const getRegistrationFailure = () =>({
    type : GET_REGISTRATION_FAILURE
})

export const getApplicationSuccess = (applicationInfo) =>({
    type : GET_APPLICATION_SUCCESS,
    payload: applicationInfo,
})

export const getApplicationFailure = () =>({
    type : GET_APPLICATION_FAILURE
})