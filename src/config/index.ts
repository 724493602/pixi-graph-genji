import { ICfg } from '@/types';

let cfg: ICfg = {
  container: '',
  debug: false,
  fps: false,
  defaultNode: {
    size: 25,
    style: {
      fill: '#bdd2fd'
    },
    labelCfg: {
      align: 'center',
      style: {
        fontSize: 12,
        fill: '#fff'
      }
    }
  },
  defaultLink: {
    style: {
      stroke: '#333333',
      lineWidth: 1
    },
    labelCfg: {
      align: 'center',
      style: {
        fontSize: 12,
        fill: '#000'
      },
      offset: {
        y: -8
      }
    }
  },
  zoom: {
    minZoom: 0.4,
    maxZoom: 2
  },
  modes: {
    default: []
  },
  currentMode: 'default',
  plugins: []
};

export default cfg;
