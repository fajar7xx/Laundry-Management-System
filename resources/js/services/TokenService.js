const TokenService = (() => {
    var _service;

    function _getService() {
        if (!_service) {
            _service = this;
            return _service;
        }

        return _service;
    }

    function _setToken(tokenObj) {
        localStorage.setItem("token", tokenObj);
    }

    function _getAcccessToken() {
        return localStorage.getItem("token");
    }

    function _clearToken() {
        localStorage.removeItem("token");
    }

    function _resetToken() {
        localStorage.setItem("token", null);
    }

    return {
        getService: _getService,
        setToken: _setToken,
        getAccessToken: _getAcccessToken,
        clearToken: _clearToken,
        resetToken: _resetToken,
    };
})();

export default TokenService;
