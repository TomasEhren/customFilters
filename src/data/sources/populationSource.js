import { MAP_TYPES } from '@deck.gl/carto';

const POPULATION_SOURCE_ID = 'populationSource';

/****************
 -- population layer was created from query:

  CREATE OR REPLACE TABLE `cartodb-gcp-solutions-eng-team.tomas_data.usa_pop` AS 
  WITH blocks AS (
    SELECT 
      d.total_pop, 
      g.state_name AS state,
      g.county_name AS county,
      g.blockgroup_geom
    FROM `bigquery-public-data.geo_census_blockgroups.us_blockgroups_national` AS g
    INNER JOIN `bigquery-public-data.census_bureau_acs.blockgroup_2018_5yr` AS d ON g.geo_id = d.geo_id
  ),
  point_lists AS (
    SELECT 
      state,
      county,
      `carto-un`.carto.ST_GENERATEPOINTS(blockgroup_geom, CAST(total_pop AS INT64)) AS points
    FROM blocks
  )

****************/

const source = {
  id: POPULATION_SOURCE_ID,
  type: MAP_TYPES.TILESET,
  connection: 'tehren',
  data: `cartodb-gcp-solutions-eng-team.tomas_data.usa_pop_tileset`,
};

export default source;
