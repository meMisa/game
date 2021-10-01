import Dispatch from "apis/client";

const urls = {
  leaderBoard: (method: string) => {
    return {
      url: "leaders",
      method,
    };
  },
};

function api() {
  return {
    getLeaderBoard: (data) =>
      Dispatch(urls.leaderBoard("get"), {}, data.payload),
  };
}

export default api();
