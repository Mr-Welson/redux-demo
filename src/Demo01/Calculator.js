import React from 'react';
import { Card, Statistic, Tooltip, Button } from 'antd';

// 展示组件
const Calculator = ({ number, handleAdd, handleMinus, handleRandom }) => (
  <Card
    hoverable
    style={{ width: 300, margin: '100px auto' }}
    actions={[
      <Tooltip title='加'>
        <Button type="primary" ghost icon='plus-circle' onClick={handleAdd}></Button>
      </Tooltip>,
      <Tooltip title='减'>
        <Button type="primary" ghost icon='minus-circle' onClick={handleMinus}></Button>
      </Tooltip>,
      <Tooltip title='随机'>
        <Button type="primary" ghost icon='reload' onClick={handleRandom}></Button>
      </Tooltip>
    ]}
  >
    <Statistic title="Redux最简应用-计数器" value={number} />
  </Card>
)

export default Calculator;