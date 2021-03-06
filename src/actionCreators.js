import {
    ADD_COMPANY,
    DELETE_COMPANY,
    FETCH_COMPANIES_ERROR,
    FETCH_COMPANIES_START,
    FETCH_COMPANIES_SUCCESS,
    FETCH_USERS_STARTED,
    FETCH_USERS_SUCCESS,
    FETCH_VACANCIES,
    FETCH_VACANCIES_SUCCESS,
    INVALIDATE_VACANCIES,
    REMOVE_COMPANY,
    USER_AUTH_SUCCESSFUL,
    USER_LOGOUT
} from "./constants";

export function addCompany(company) {
    return {
        type: ADD_COMPANY,
        payload: company,
    };
}

export function removeCompany(id) {
    return {
        type: REMOVE_COMPANY,
        payload: id
    }
}

export function fetchCompanyStart(companyId) {
    return {
        type: FETCH_COMPANIES_START,
        payload: companyId
    }
}

export function fetchCompanySuccess(company) {
    return {
        type: ADD_COMPANY,
        payload: company
    }
}

export function fetchCompaniesSuccess(payload) {
    return {
        type: FETCH_COMPANIES_SUCCESS,
        payload: payload
    }
}

export function fetchCompaniesError() {
    return {
        type: FETCH_COMPANIES_ERROR,
    }
}
export function fetchUsersSuccess(payload) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: payload,
    }
}

export function fetchUsersStarted() {
    return {
        type: FETCH_USERS_STARTED
    }
}

export function deleteCompany(companyId) {
    return {
        type: DELETE_COMPANY,
        payload: companyId
    }
}

export function login(user) {
    return {
        type: USER_AUTH_SUCCESSFUL,
        payload: user,
    }
}

export function fetchVacancies() {
    return {
        type: FETCH_VACANCIES
    }
}

export function invalidateVacancies() {
    return {
        type: INVALIDATE_VACANCIES
    }
}

export function fetchVacanciesSuccess(data) {
    return {
        type: FETCH_VACANCIES_SUCCESS,
        payload: data
    }

}

export function logout() {
    return {
        type: USER_LOGOUT,
    }
}