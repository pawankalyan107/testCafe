import { ClientFunction } from "testcafe";

const getWindowLocation = ClientFunction(() => {
    return window.location;
  });

module.exports = {getWindowLocation}