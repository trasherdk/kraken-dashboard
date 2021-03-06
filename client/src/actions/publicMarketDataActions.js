import axios from "axios";
import axiosCancel from "axios-cancel";
import {
  GET_TICKER,
  GET_TRADES,
  GET_PAIR,
  GET_PAIRS,
  GET_ERRORS,
  GET_ORDERBOOK,
  CLEAR_PAIR,
  CLEAR_PAIRS,
  CLEAR_TICKER,
  CLEAR_TRADES,
  CLEAR_ORDERBOOK
} from "./types";

axiosCancel(axios, {
  debug: false // default
});

export const getTicker = pair => dispatch => {
  axios({
    method: "get",
    requestId: "ticker",
    url: "/api/publicMarketData/Ticker/" + pair
  })
    .then(res =>
      dispatch({
        type: GET_TICKER,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const getTrades = pair => dispatch => {
  axios({
    method: "get",
    requestId: "trades",
    url: "/api/publicMarketData/Trades/" + pair
  })
    .then(res =>
      dispatch({
        type: GET_TRADES,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const getPairs = () => dispatch => {
  axios({
    method: "get",
    requestId: "pairs",
    url: "/api/publicMarketData/AssetPairs"
  })
    .then(res =>
      dispatch({
        type: GET_PAIRS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const getPair = pairName => dispatch => {
  axios({
    method: "get",
    requestId: "pair",
    url: "/api/publicMarketData/AssetPairs/" + pairName
  })
    .then(res =>
      dispatch({
        type: GET_PAIR,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const getOrderbook = pair => dispatch => {
  axios({
    method: "get",
    requestId: "orderbook",
    url: "/api/publicMarketData/Depth/" + pair
  })
    .then(res =>
      dispatch({
        type: GET_ORDERBOOK,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      });
    });
};

export const clearOrderbook = () => {
  return {
    type: CLEAR_ORDERBOOK
  };
};

export const clearPairs = () => {
  return {
    type: CLEAR_PAIRS
  };
};

export const clearPair = () => {
  return {
    type: CLEAR_PAIR
  };
};

export const clearTrades = () => {
  return {
    type: CLEAR_TRADES
  };
};

export const clearTicker = () => {
  return {
    type: CLEAR_TICKER
  };
};
