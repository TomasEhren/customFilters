import { useEffect } from 'react';
import popAggSource from 'data/sources/popAggSource';
import { POP_AGG_LAYER_ID } from 'components/layers/PopAggLayer';
import populationSource from 'data/sources/populationSource';
import { POPULATION_LAYER_ID } from 'components/layers/PopulationLayer';
import countiesSource from 'data/sources/countiesSource';
import { COUNTIES_LAYER_ID } from 'components/layers/CountiesLayer';
import { useDispatch } from 'react-redux';
import { addLayer, removeLayer, addSource, removeSource } from '@carto/react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

//import { CategoryWidget } from '@carto/react-widgets';
import { AggregationTypes } from '@carto/react-core';

import CustomCategoryWidget from 'components/widgets/CustomCategoryWidget';
import { FormulaWidget } from '@carto/react-widgets';

const useStyles = makeStyles(() => ({
  filters: {},
}));

export default function Filters() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(addSource(populationSource));

    dispatch(
      addLayer({
        id: POPULATION_LAYER_ID,
        source: populationSource.id,
      })
    );

    return () => {
      dispatch(removeLayer(POPULATION_LAYER_ID));
      dispatch(removeSource(populationSource.id));
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(addSource(countiesSource));

    dispatch(
      addLayer({
        id: COUNTIES_LAYER_ID,
        source: countiesSource.id,
      })
    );

    return () => {
      dispatch(removeLayer(COUNTIES_LAYER_ID));
      dispatch(removeSource(countiesSource.id));
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(addSource(popAggSource));

    dispatch(
      addLayer({
        id: POP_AGG_LAYER_ID,
        source: popAggSource.id,
      })
    );

    return () => {
      dispatch(removeLayer(POP_AGG_LAYER_ID));
      dispatch(removeSource(popAggSource.id));
    };
  }, [dispatch]);

  // [hygen] Add useEffect
  const CustomFormatter = (value) => {
    const formatted =
      value > 1e6
        ? `${Math.round(value / 1e6, 2)} M`
        : value > 1e3
        ? `${Math.round(value / 1e3, 2)} k`
        : `${value}`;
    return formatted;
  };
  return (
    <Grid container direction='column' className={classes.filters}>
      <Grid item>
        <FormulaWidget
          id='totPop'
          title='Total Population'
          dataSource={popAggSource.id}
          column='aggregated_total'
          operation={AggregationTypes.SUM}
          formatter={(v) => CustomFormatter(v)}
          onError={console.error}
        />
        <CustomCategoryWidget
          id='stateCategory'
          title='State Name'
          dataSource={countiesSource.id}
          column='state'
          operation={AggregationTypes.COUNT}
          onError={console.error}
          otherSources={[
            { id: populationSource.id, column: 'state' },
            { id: popAggSource.id, column: 'state' },
          ]}
        />
        <CustomCategoryWidget
          id='countyCategory'
          title='County Name'
          dataSource={countiesSource.id}
          column='county'
          operation={AggregationTypes.COUNT}
          onError={console.error}
          otherSources={[
            { id: populationSource.id, column: 'county' },
            { id: popAggSource.id, column: 'county' },
          ]}
        />
      </Grid>
    </Grid>
  );
}
