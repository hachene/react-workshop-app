import types from "./astronaut.types";

const addAstronaut = () => ({
  type: types.ADD_ASTRONAUT,
});

const removeAstronaut = () => ({
  type: types.REMOVE_ASTRONAUT,
});

export default {
  addAstronaut,
  removeAstronaut,
};
