import { MAP_TYPES } from '@deck.gl/carto';

const COUNTIES_SOURCE_ID = 'countiesSource';

/****************
 -- counties layer was created from query:
  CREATE OR REPLACE TABLE `cartodb-gcp-solutions-eng-team.tomas_data.usa_counties` AS
  SELECT 
    state_name AS state,
    county_name AS county,
    SUM(d.total_pop) AS pop,
    ST_SIMPLIFY(ST_UNION_AGG(blockgroup_geom), 200) as geom
  FROM `bigquery-public-data.geo_census_blockgroups.us_blockgroups_national` AS g
  INNER JOIN `bigquery-public-data.census_bureau_acs.blockgroup_2018_5yr` AS d ON g.geo_id = d.geo_id
  GROUP BY 1, 2
 ****************/

const source = {
  id: COUNTIES_SOURCE_ID,
  type: MAP_TYPES.TABLE,
  connection: 'tehren',
  data: `cartodb-gcp-solutions-eng-team.tomas_data.usa_counties`,
};

export default source;
