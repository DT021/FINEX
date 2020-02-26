/* Paths for frontend routing */
export const HOME_PATH = '/';
export const YOUR_STOCKS_PATH = '/yourstocks'
export const SEARCH_STOCK_PATH = '/searchstock'
export const REGISTRATION_PATH = '/registration'
export const RESET_PASS_PATH = '/reset'
export const ACCOUNT_PATH = '/account'
export const LOGIN_PATH = '/login'

/* Base URL for Backend */
export const BASE = 'http://localhost:5000'

/* Paths to Call Backend */
export const LOGIN_URL = BASE + "/auth/login"
export const LOGOUT_URL = BASE + "/auth/logout"
export const REGISTER_URL = BASE + "/auth/register"
export const USER_INFO_URL = BASE + "/auth/user"

/* Paths for API calls */
export const STOCK_LIST_API = '/api/stock/auto/'
