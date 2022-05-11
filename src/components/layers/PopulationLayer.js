import { useSelector, useDispatch } from 'react-redux';
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById, updateLayer } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';
import GL from '@luma.gl/constants';

export const POPULATION_LAYER_ID = 'populationLayer';
const layerConfig = {
  title: 'Population',
  visible: true,
  legend: {},
};

export default function PopulationLayer() {
  const { populationLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, populationLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });
  const dispatch = useDispatch();

  if (populationLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: POPULATION_LAYER_ID,
      getFillColor: [217, 219, 94],
      pointRadiusMinPixels: 0.8,
      getLineColor: [0, 0, 0],
      lineWidthMinPixels: 1,
      pickable: true,
      parameters: {
        blendFunc: [GL.SRC_ALPHA, GL.DST_ALPHA],
        blendEquation: GL.FUNC_ADD,
      },
      visible: populationLayer.visible,
      onDataLoad: (data) => {
        dispatch(
          updateLayer({
            id: POPULATION_LAYER_ID,
            layerAttributes: { ...layerConfig },
          })
        );
        cartoLayerProps.onDataLoad(data);
      },
      onHover: (info) => {
        if (info?.object) {
          info.object = {
            html: htmlForFeature({ feature: info.object }),
            style: {},
          };
        }
      },
    });
  }
}
