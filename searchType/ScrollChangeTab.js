import React, { Fragment, useEffect, useRef, useState } from "react";

const throttle = (fn, threshold = 100) => {
  let last;
  let timer;

  return () => {
    const now = +new Date();
    const timePassed = !!last && now < last + threshold;

    if (timePassed) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
};
const ScrollChangeTab = (props) => {
  const itemsRef = useRef();
  const [viewStateData, setViewstateData] = useState(null);
  useEffect(() => {
    initFromProps();
    onEvent();
  }, []);
  const initScrollContent = (ids) => {
    const targetItems = ids.map((id) => {
      return document.getElementById(id);
    });
    return targetItems;
  };
  // 初始化参数
  const initFromProps = () => {
    const targetScrollContentEle = initScrollContent(props.navIds);
    itemsRef.current = targetScrollContentEle;
    handleScroll(targetScrollContentEle);
  };
  // 滚动监听方法
  const handleScroll = (targets) => {
    const elemensViewState = getElementViewState(targets);
    setViewstateData(elemensViewState);
    console.log(elemensViewState);
  };
  const _throttle = () => {
    throttle(handleScroll(), 100);
  };
  const isInView = (el) => {
    if (!el) {
      return false;
    }
    const { offset = 0 } = props;
    const rect = el.getBoundingClientRect();
    const winH = window.innerHeight;
    const { scrollTop } = getScrollDimension();
    const scrollBottom = scrollTop + winH;
    const elTop = rect.top + scrollTop + offset;
    const elBottom = elTop + el.offsetHeight;
    return elTop < scrollBottom && elBottom > scrollTop;
  };
  const getElementViewState = (targets) => {
    let [elemsInView, elemsOutView, viewStatusList] = [[], [], []];
    const targetItems = targets ? targets : itemsRef.current;
    let hasInViewAlready = false;
    for (let i = 0, max = targetItems.length; i < max; i++) {
      const currentContent = targetItems[i];
      let isInViewBool = hasInViewAlready ? false : isInView(currentContent);

      if (isInViewBool) {
        hasInViewAlready = true;
        elemsInView.push(currentContent);
      } else {
        elemsOutView.push(currentContent);
      }

      const isLastItem = i === max - 1;
      const isScrolledBool = isScrolled();

      const isLastShortItemAtBottom =
        isAtBottom() &&
        isInView(currentContent) &&
        !isInViewBool &&
        isLastItem &&
        isScrolledBool;

      if (isLastShortItemAtBottom) {
        elemsOutView.pop();
        elemsOutView.push(...elemsInView);
        elemsInView = [currentContent];
        viewStatusList = fillArray(viewStatusList, false);
        isInViewBool = true;
      }

      viewStatusList.push(isInViewBool);
    }
    return {
      inView: elemsInView,
      outView: elemsOutView,
      viewStatusList,
      // scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList),
    };
  };
  const fillArray = (array, val) => {
    let newArray = [];

    for (let i = 0, max = array.length; i < max; i++) {
      newArray[i] = val;
    }

    return newArray;
  };

  const isAtBottom = () => {
    const { scrollTop, scrollHeight } = getScrollDimension();
    const winH = window.innerHeight;
    const scrolledToBottom = scrollTop + winH >= scrollHeight;
    return scrolledToBottom;
  };
  // 获取滚动参数
  const getScrollDimension = () => {
    const scrollTop =
      document.documentElement.scrollTop ||
      document.body.parentNode.scrollTop ||
      document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight ||
      document.body.parentNode.scrollHeight ||
      document.body.scrollHeight;
    return {
      scrollHeight,
      scrollTop,
    };
  };
  const isScrolled = () => {
    return getScrollDimension().scrollTop > 0;
  };
  const onEvent = () => {
    const el = props.rootEl ? document.querySelector(props.rootEl) : window;

    el.addEventListener("scroll", _throttle);
  };
  const handleClick = (e) => {
    console.log(e.target);
    const id = e.target.dataset.socrllId;
    // const ids = props.navIds.filter((item) => item.id !== id);
    const currentItem = initScrollContent([id]);
    const rect = currentItem[0]?.getBoundingClientRect();
    const winH = window.innerHeight;
    const { offset = 0 } = props;
    const { scrollTop } = getScrollDimension();
    // 问题： 兼容判断
    document.body.scrollTop = rect?.top + scrollTop + offset;
    document.documentElement.scrollTop = rect?.top + scrollTop + offset;
  };
  const { children, className, isStartParent, style, activeClassName } = props;
  const getClassName = (classNameObj) => {
    let tempK = [];
    for (const [k, v] of Object.entries(classNameObj)) {
      if (v) {
        tempK.push(k);
      }
    }
    if (!tempK.length) return "";
    return tempK.join(" ");
  };
  const getReactTag = (child, index) => {
    const ChildTag = child.type;
    const childClass = getClassName({
      [`${child.props.className}`]: child.props.className,
      [`${activeClassName}`]:
        child.props["data-socrll-id"] && viewStateData?.viewStatusList[index],
    });
    return (
      <ChildTag
        {...child.props}
        className={childClass}
        key={`scroll_children_tag_${index}`}
      >
        {child.props.children}
      </ChildTag>
    );
  };
  const Tag = props.componentTag ? props.componentTag : Fragment;
  const items = React.Children.map(children, (child, index) => {
    if (!child) {
      return null;
    }
    console.log(children, child);
    const ChildTag = child.type;
    const childClass = getClassName({
      [`${child.props.className}`]: child.props.className,
      [`${activeClassName}`]:
        isStartParent && viewStateData?.viewStatusList[index],
    });
    return (
      <ChildTag
        {...child.props}
        className={childClass}
        key={`scroll_children_tag_${index}`}
        onClick={handleClick}
      >
        {isStartParent
          ? child.props.children
          : getReactTag(child.props.children, index)}
      </ChildTag>
    );
  });

  const tagClass = getClassName({
    [`${className}`]: className,
  });
  return <Tag className={tagClass}>{items}</Tag>;
};

export default ScrollChangeTab;
