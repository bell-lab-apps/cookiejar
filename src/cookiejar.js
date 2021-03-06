// Default settings
let defaults = {
	path: '/'
};


/**
 * Create a settings string from an object of options
 * @param  {Object} options The options
 * @return {String}         The settings
 */
function getSettings (options = {}) {
	let settings = Object.assign({}, defaults, options);
	return Object.entries(settings).map(function (option) {
		if (option[0] === 'secure') return options[1] === 'true' ? option[0] : '';
		return `${option[0]}=${option[1]}`;
	}).join('; ');
}


/**
 * Create a cookie
 * @param {String} name    The name of the cookie
 * @param {String} value   The value of the cookie
 * @param {Object} options Options and settings
 */
function set (name, value, options) {
	if (!name || !value) throw 'A name and value are required.';
	if (typeof value !== 'string') throw 'Cookie values can only be strings.';
	document.cookie = `${name}=${value}; ${getSettings(options)}`;
}

/**
 * Get the value of a cookie
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
function get (name) {
	let value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

/**
 * Delete a cookie
 * @param {String} name The name of the cookie
 * @param {String} path The path for the cookie
 */
function remove (name, path = '/') {
	document.cookie = `${name}=null; path=${path}; max-age=0;`;
}


let jar = {set, get, remove};
export default jar;
