const sessionStorageService = (function () {
  let _service;

  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _setScore(score) {
    sessionStorage.setItem("score", score);
  }

  function _getScore() {
    return sessionStorage.getItem("score");
  }

  function _clearScore() {
    sessionStorage.removeItem("score");
    sessionStorage.clear();
  }

  return {
    getService: _getService,
    setScore: _setScore,
    getScore: _getScore,
    clearScore: _clearScore,
  };
})();
export default sessionStorageService;
