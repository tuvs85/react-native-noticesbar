import React, { Component } from 'react';
import { Text, View, Animated, Easing, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
export default class NoticesBar extends Component {
  static defaultProps = {
    enableAnimation: true,
  };
  static propTypes = {
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    showFieldName: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    enableAnimation: PropTypes.bool,
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object,PropTypes.string]),
    delay: PropTypes.number,
    duration: PropTypes.number,
    scrollHeight: PropTypes.number.isRequired,
    scrollStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    paddingLeft: PropTypes.number,
  }
  constructor(props) {
    super(props);
    let translateValue = new Animated.ValueXY({ x: 0, y: 0 });
    translateValue.addListener(({ x, y }) => {});
    this.state = {
      translateValue: translateValue,
      // 滚屏高度
      scrollHeight: this.props.scrollHeight,
      // 滚屏内容
      kb_content: [],
      // Animated.View 滚动到的 y轴坐标
      kb_tempValue: 0,
      // 最大偏移量
      kb_contentOffsetY: 0,
      // 每一次滚动切换之前延迟的时间
      delay: this.props.delay || 500,
      // 每一次滚动切换的持续时间
      duration: this.props.duration || 500,

      enableAnimation: true,
    };
  }

  render() {
    return (
      <View
        style={[
          styles.kbContainer,
          { height: this.state.scrollHeight, flex: 1, flexDirection: 'row', alignContent: 'center' },
          this.props.kbContainer,
        ]}
      >
        {this.props.icon}
        <View style={[this.props.icon ? { paddingLeft: this.props.paddingLeft }: '']}>
          {this.state.kb_content.length !== 0 ? (
            <Animated.View
              style={[
                { flexDirection: 'column'},
                {
                  transform: [{ translateY: this.state.translateValue.y }],
                },
              ]}
            >
              {this.state.kb_content.map(this._createKbItem.bind(this))}
            </Animated.View>
          ) : null}
        </View>
      </View>
    );
  }

  componentWillReceiveProps(nextProps) {
    const context = nextProps.data;
    if (context.length !== 0) {
      const h = (context.length + 1) * this.state.scrollHeight;
      this.setState({
        kb_content: context.concat(context[0]),
        kb_contentOffsetY: h,
      });
    }
    this.setState(
      {
        enableAnimation: !!nextProps.enableAnimation,
      },
      () => {
        this.startAnimation();
      },
    );
  }

  componentDidMount() {
    let content = this.props.data || [];
    if (content.length !== 0) {
      let h = (content.length + 1) * this.state.scrollHeight;
      this.setState({
        kb_content: content.concat(content[0]),
        kb_contentOffsetY: h,
      });

      // 开始动画
      // this._startAnimation()
      this.startAnimation();
    }
  }

  _createKbItem(kbItem, index) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.onPress(kbItem);
        }}
        key={index}
        style={[{ justifyContent: 'center', height: this.state.scrollHeight}, this.props.scrollStyle]}
      >
        <Text numberOfLines={3} style={[this.props.textStyle,{height: this.state.scrollHeight ,lineHeight: this.state.scrollHeight }]}>{kbItem[this.props.showFieldName]}</Text>
      </TouchableWithoutFeedback>
    );
  }

  startAnimation = () => {
    if (this.state.enableAnimation) {
      if (!this.animation) {
        this.animation = setTimeout(() => {
          this.animation = null;
          this._startAnimation();
        }, this.state.delay);
      }
    }
  };

  componentWillUnmount() {
    if (this.animation) {
      clearTimeout(this.animation);
    }
    if (this.state.translateValue) {
      this.state.translateValue.removeAllListeners();
    }
  }

  _startAnimation = () => {
    this.state.kb_tempValue -= this.state.scrollHeight;
    if (this.props.onChange) {
      let index = Math.abs(this.state.kb_tempValue) / this.state.scrollHeight;
      this.props.onChange(index < this.state.kb_content.length - 1 ? index : 0);
    }
    Animated.sequence([
      // Animated.delay(this.state.delay),
      Animated.timing(this.state.translateValue, {
        isInteraction: false,
        toValue: { x: 0, y: this.state.kb_tempValue },
        duration: this.state.duration, // 动画持续的时间（单位是毫秒），默认为500
        easing: Easing.linear,
      }),
    ]).start(() => {
      // 无缝切换
      if (this.state.kb_tempValue - this.state.scrollHeight === -this.state.kb_contentOffsetY) {
        // 快速拉回到初始状态
        this.state.translateValue.setValue({ x: 0, y: 0 });
        this.state.kb_tempValue = 0;
      }
      this.startAnimation();
    });
  };
}

const styles = StyleSheet.create({
  kbContainer: {
    // 必须要有一个背景或者一个border，否则本身高度将不起作用
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
});
