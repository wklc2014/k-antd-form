// import { actions } from 'mirrorx';
import state from './state/_summary.js';

export default {
  name: '_summary',
  initialState: state,
  reducers: {
    update(state, data) {
      return { ...state, ...data };
    },
    updateDataSource(state, data) {
      const { dataSource } = state;
      const { id, value, order } = data;
      const newDataSource = dataSource.map((val, i) => {
        const newVal = {...val};
        if (i === order) {
          newVal[id] = value;
        }
        return newVal;
      })
      return { ...state, dataSource: newDataSource }
    },
  }
}
