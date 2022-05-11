import { useSelector, useDispatch } from 'react-redux';
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById, updateLayer } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const COUNTIES_LAYER_ID = 'countiesLayer';

const layerConfig = {
  title: 'Counties',
  visible: true,
  legend: {},
};

export default function CountiesLayer() {
  const { countiesLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, countiesLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });
  const dispatch = useDispatch();

  if (countiesLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: COUNTIES_LAYER_ID,
      getFillColor: [195, 199, 198, 0],
      pointRadiusMinPixels: 1,
      getLineColor: [195, 199, 198],
      lineWidthMinPixels: 0.3,
      pickable: true,
      visible: countiesLayer.visible,
      onDataLoad: (data) => {
        dispatch(
          updateLayer({
            id: COUNTIES_LAYER_ID,
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
