/**
 * his is thirdparty from
 * https://www.tjcafferkey.me/replace-placeholder-values-string-javascript/
 * didn't have time to check if it's working right way or not.
 *
 * @param str
 * @param data
 * @return {*}
 */
export function stringInject(str, data) {
    if (typeof str === 'string' && (data instanceof Array)) {

        return str.replace(/({\d})/g, function(i) {
            return data[i.replace(/{/, '').replace(/}/, '')];
        });
    } else if (typeof str === 'string' && (data instanceof Object)) {

        for (let key in data) {
            return str.replace(/({([^}]+)})/g, function(i) {
                let key = i.replace(/{/, '').replace(/}/, '');
                if (!data[key]) {
                    return i;
                }

                return data[key];
            });
        }
    } else {

        return false;
    }
}