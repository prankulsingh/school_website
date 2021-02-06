String.prototype.toTitleCase = function () {
    try {
        if (this) {
            return this.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        } else {
            return this;
        }
    } catch (e) {
        try { console.error(`Unable to make title case for ${this}`); } catch (ignoredError) {}
        console.error(`Unable to make title case`);
        return this
    }
};

String.prototype.toShortForm = function () {
    try {
        if (this) {
            let arr = this.split(' ');
            let returnString = '';
            arr.forEach(str => {
                if (str && str.length > 0) {
                    returnString += str[0].toUpperCase();
                    returnString += ".";
                }
            });
            return returnString;
        } else {
            return this;
        }
    } catch (e) {
        try { console.error(`Unable to make short form for ${this}`); } catch (ignoredError) {}
        console.error(`Unable to make short form`);
        return this
    }
};
