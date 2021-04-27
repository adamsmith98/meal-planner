"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRegisterInfo = (username, password) => {
    if (username.length < 3) {
        return {
            errors: [
                {
                    field: "username",
                    message: "username must be at least 3 characters long",
                },
            ],
        };
    }
    if (/\W/.test(username)) {
        return {
            errors: [
                {
                    field: "username",
                    message: "username must only contain alphanumeric characters or underscores",
                },
            ],
        };
    }
    if (!/[a-zA-Z0-9]/.test(username)) {
        return {
            errors: [
                {
                    field: "username",
                    message: "username must contain at least one alphanumeric character",
                },
            ],
        };
    }
    if (password.length < 6) {
        return {
            errors: [
                {
                    field: "password",
                    message: "password must be at least 6 characters long",
                },
            ],
        };
    }
    if (!/\d/.test(password)) {
        return {
            errors: [
                {
                    field: "password",
                    message: "password must contain at least one number",
                },
            ],
        };
    }
    if (!(/[A-Z]/.test(password) && /[a-z]/.test(password))) {
        return {
            errors: [
                {
                    field: "password",
                    message: "password must contain a mix of uppercase and lowercase",
                },
            ],
        };
    }
    return null;
};
exports.default = validateRegisterInfo;
//# sourceMappingURL=validateRegisterInfo.js.map