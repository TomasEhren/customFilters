import { useSelector } from 'react-redux';
import { CartoLayer } from '@deck.gl/carto';
import { selectSourceById } from '@carto/react-redux';
import { useCartoLayerProps } from '@carto/react-api';
import htmlForFeature from 'utils/htmlForFeature';

export const POP_AGG_LAYER_ID = 'popAggLayer';

export default function PopAggLayer() {
  const { popAggLayer } = useSelector((state) => state.carto.layers);
  const source = useSelector((state) => selectSourceById(state, popAggLayer?.source));
  const cartoLayerProps = useCartoLayerProps({ source });

  if (popAggLayer && source) {
    return new CartoLayer({
      ...cartoLayerProps,
      id: POP_AGG_LAYER_ID,
      getFillColor: [241, 109, 122],
      pointRadiusMinPixels: 2,
      getLineColor: [255, 0, 0],
      lineWidthMinPixels: 1,
      pickable: true,
      visible: false,
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
