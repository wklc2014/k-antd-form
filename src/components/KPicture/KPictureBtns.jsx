import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Slider, Button, Popover, InputNumber, Row, Col } from 'antd';
import Display from '../Display/Display.jsx';

import __kPictureBtns from './common/__kPictureBtns.js';

const ButtonGroup = Button.Group;

function getPopoverContent(type, values, onChange) {
  const SliderProps = {
    onChange: (e) => onChange(type, e),
    value: values[type],
  };
  if (type === 'rotate') {
    SliderProps.marks = { 0: '0', 90: '90', 180: '180', 270: '270', 360: '360' };
    SliderProps.min = 0;
    SliderProps.max = 360;
  } else if (type === 'zoom') {
    SliderProps.marks = { 0: '0', 50: '50', 100: '100', 150: '150', 200: '200', 250: '250', 300: '300' };
    SliderProps.min = 0;
    SliderProps.max = 300;
  }
  return (
    <Row type="flex" gutter={24} >
      <Col span={18}>
        <Slider {...SliderProps} />
      </Col>
      <Col span={6} style={{ paddingTop: 5 }}>
        <InputNumber {...SliderProps} style={{ width: '100%' }} />
      </Col>
    </Row>
  )
}

function getPopoverTitle(type) {
  if (type === 'rotate') {
    return '旋转角度(deg)';
  } else if (type === 'zoom') {
    return '缩放比例(%)';
  }
}

export default function KPictureBtns (props) {

  const {
    btns = [],
    rotate = 0,
    zoom = 1,
    disabled = false,
    onChange,
  } = props;

  const PopoverStyle = { width: 400 };
  const values = { rotate, zoom };

  const btnEle = __kPictureBtns.filter(v => is.inArray(v.value, btns)).map((btn, i) => {
    const btnDisabled = btn.value !== 'prev' && btn.value !== 'next' && disabled;
    const content = getPopoverContent(btn.value, values, onChange);
    const title = getPopoverTitle(btn.value);
    const condition = btn.value === 'rotate' || btn.value === 'zoom';
    return (
      <Display condition={condition} key={i}>
        <Popover
          content={content}
          overlayStyle={PopoverStyle}
          title={title}
          trigger="click"
        >
          <Button disabled={btnDisabled}>{btn.label}</Button>
        </Popover>
        <Button
          onClick={() => onChange(btn.value)}
          disabled={btnDisabled}
        >
          {btn.label}
        </Button>
      </Display>
    )
  })

  return (
    <div className="k-picture-btn">
      <ButtonGroup>{btnEle}</ButtonGroup>
    </div>
  )
}

KPictureBtns.propTypes = {
  btns: propTypes.array,
  onChange: propTypes.func.isRequired,
  rotate: propTypes.number,
  zoom: propTypes.number,
  disabled: propTypes.bool,
}
