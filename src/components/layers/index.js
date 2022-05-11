import CountiesLayer from './CountiesLayer';
import PopulationLayer from './PopulationLayer';
import PopAggLayer from './PopAggLayer';
// [hygen] Import layers

export const getLayers = () => {
  return [
    CountiesLayer(),
    PopulationLayer(),
    PopAggLayer(),
    // [hygen] Add layer
  ];
};
