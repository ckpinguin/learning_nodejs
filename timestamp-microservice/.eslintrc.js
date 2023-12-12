module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-console": 0,
        "no-unused-vars": 1,
        // "no-unexpected-multilines": 0,
        "indent": [
            "warn", 4
        ],
        "linebreak-style": [
            "error", "unix"
        ],
        "quotes": [
            "error", "single"
        ],
        "semi": [
            "error", "always"
        ],
        "react/jsx-boolean-value": 0,
        "jsx-quotes": 1,
    }
};
