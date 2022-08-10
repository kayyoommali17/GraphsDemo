import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  VictoryAxis,
  VictoryCandlestick,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';
// function randomDate(start:any, end:any) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// const d = randomDate(new Date(2012, 0, 1), new Date());
const Graphs = () => {
  const data = [
    {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 2},
    {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
    {x: new Date(2016, 6, 4), open: 20, close: 15, high: 20, low: 7},
    {x: new Date(2016, 6, 5), open: 18, close: 16, high: 20, low: 15},
    {x: new Date(2016, 6, 6), open: 16, close: 14, high: 20, low: 12},
    {x: new Date(2016, 6, 7), open: 15, close: 12, high: 18, low: 10},
    {x: new Date(2016, 6, 8), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 9), open: 13, close: 18, high: 22, low: 10},
    {x: new Date(2016, 6, 10), open: 18, close: 22, high: 25, low: 14},
    {x: new Date(2016, 6, 11), open: 20, close: 15, high: 20, low: 13},
    {x: new Date(2016, 6, 12), open: 16, close: 8, high: 18, low: 7},
    {x: new Date(2016, 6, 13), open: 5, close: 10, high: 15, low: 0},
    {x: new Date(2016, 6, 14), open: 10, close: 15, high: 20, low: 5},
    {x: new Date(2016, 6, 15), open: 15, close: 20, high: 22, low: 10},
    {x: new Date(2016, 6, 16), open: 20, close: 10, high: 25, low: 7},
    {x: new Date(2016, 6, 17), open: 10, close: 8, high: 15, low: 5},
  ];
  return (
    <SafeAreaView>
      <Text>{'gyyyererjiiuteruirhtu'}</Text>
      <VictoryChart domainPadding={{x: 25}} scale={{x: 'time'}}>
        <VictoryCandlestick
          candleColors={{positive: '#59CE8F', negative: '#FF1E00'}}
          data={data}
        />

        <VictoryAxis
        // tickFormat={(t: any) => `${t.getDate()}/${t.getMonth()}`}
        />
        <VictoryAxis dependentAxis />
      </VictoryChart>
    </SafeAreaView>
  );
};

export default Graphs;

const styles = StyleSheet.create({});
