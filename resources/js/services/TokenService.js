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

    return {
        getService: _getService,
        setToken: _setToken,
        getAccessToken: _getAcccessToken,
        clearToken: _clearToken,
    };
})();

export default TokenService;
