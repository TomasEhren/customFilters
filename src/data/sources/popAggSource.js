import { MAP_TYPES } from '@deck.gl/carto';

const POP_AGG_SOURCE_ID = 'popAggSource';

/***************
 -- popAgg layer was created from query:

DROP TABLE IF EXISTS `cartodb-gcp-solutions-eng-team.tomas_data.usa_pop_agg_tileset`;
CALL `carto-un`.carto.CREATE_POINT_AGGREGATION_TILESET(
  R'''(
    SELECT state, county, points as geom FROM `cartodb-gcp-solutions-eng-team.tomas_data.usa_pop` 
  )''',
  '`cartodb-gcp-solutions-eng-team.tomas_data.usa_pop_agg_tileset`',
  R'''
    {
      "zoom_min": 3,
      "zoom_max": 8,
      "aggregation_type": "quadkey",
      "aggregation_resolution": 7,
      "aggregation_placement": "cell-centroid",
      "properties":{
        "aggregated_total": {
          "formula":"count(*)",
          "type":"Number"
        },
        "state": {
            "formula":"APPROX_TOP_COUNT(state, 1)[OFFSET(0)].value",
            "type":"String"
        },
        "county": {
            "formula":"APPROX_TOP_COUNT(county, 1)[OFFSET(0)].value",
            "type":"String"
        }
      }
    }
  ''');
 ***************/

const source = {
  id: POP_AGG_SOURCE_ID,
  type: MAP_TYPES.TILESET,
  connection: 'tehren',
  data: `cartodb-gcp-solutions-eng-team.tomas_data.usa_pop_agg_tileset`,
};

export default source;
