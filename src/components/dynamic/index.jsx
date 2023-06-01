import { useEffect, useRef } from 'react'
import './dynamic.css'

export default function Dynamic() {
  // 父容器
  const wrapperRef = useRef(null);
  // 列数
  const count = 4;
  // 间距
  const gap = 10;
  // 列宽
  let width = (960 - 30) / 4
  let height = 0;
  // 子元素集合
  let items = [];
  // 每列高度
  let heightCollection = [];
  // 虚拟节点集合
  const flag = useRef(null);

  const init = () => {
    items = Array.from(wrapperRef.current.children);
    rest();
    render();
  }

  const rest = () => {
    flag.current = document.createDocumentFragment();
    width = wrapperRef.current.clientWidth / count;
    heightCollection = new Array(count).fill(0);
    wrapperRef.current.innerHTML = '';
  }

  const pasteTiles = (item, img) => {
    // 获取高度最小的列
    let tag = heightCollection.indexOf(Math.min(...heightCollection))
    const hc = heightCollection;
    // 将当前item放在高度最小的列下方
    item.style.left = tag * (width + gap) + 'px'
    item.style.top = heightCollection[tag] + 'px'
    // 重新计算列高
    hc[tag] += img.height * width / img.width + gap
    const maxH = Math.max(...hc);
    height = maxH;
    heightCollection = hc;
    flag.current.appendChild(item)
    // console.log(flag.current)
  }

  const render = () => {
    items.forEach(item => {
      item.style.width = width + 'px';
      item.style.position = 'absolute';
      let img = item.querySelector('img');
      if (img.complete) {
        pasteTiles(item, img)
        wrapperRef.current.appendChild(flag.current)
      } else {
        img.onload = () => {
          pasteTiles(item, img)
          wrapperRef.current.appendChild(flag.current)
        }
      }
    })
  }

  useEffect(() => {
    init();
  }, [])


  return (
    <div className='wrapper' ref={wrapperRef} style={{height: height + 'px'}}>
      <div className="item">
        <img src="https://img2.baidu.com/it/u=495835036,1981564014&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"  alt=""/></div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8b0f8331f4c4a13d3a94f8761e5e583c30242e8e13bf7-eGTYCv_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=2221b096e144ca84667c7d56f14b6c99"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fff16edba4a7122476c64fa5ad7053a92ce99ae013bd9f-eaemlO_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=7c4811ba3f4c2afc87d33109d868dba0"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2448ef88048c2aca89232ed8962888d8c7dd462028359-9KyB9b_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=fcf4f239dd10dee7f11f3a893b1aaf10"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F00ddcaa15a09aadb4d15f4d2b767a9e378c7055c8f9f5-0xcZvm_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=af0faf0a9c1d60507ada13cb60a37b62"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F68928c19a423124546cfcf43342958249cdced632b521-k1XF0c_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=90520032c2782bf683e542ae51112953"  alt=""/>
      </div>
      <div className="item">
        <img src="https://img0.baidu.com/it/u=3509278074,3810336214&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=706"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13209289360%2F1000&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=039dddf42c03855bb0fdd571df319732"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6afced3f1cb0bb0bd3793dc30ed6853140289b4254c2-GxQ3cU_fw236&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=adf0d66093cfa8269a006fc50d5b7f08"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F8856f411e648d4c1ba86cabd8fded3be05811b2c895b-ZWJ704_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319094&t=9e5f29b536aebd58646c029c587a3da7"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F17%2F20150817091657_VPFGL.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319190&t=2839aae0f1009acfb04bada1e5b5138d"  alt=""/>
      </div>
      <div className="item">
        <img src="https://img2.baidu.com/it/u=3447211292,765601268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=498"  alt=""/>
      </div>
      <div className="item">
        <img src="https://img0.baidu.com/it/u=3916125574,3081239595&fm=253&fmt=auto&app=138&f=JPEG?w=567&h=500"  alt=""/>
      </div>
      <div className="item">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201307%2F23%2F20130723133009_frZYZ.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668319308&t=1e4de7947594092c6f840f4aea82b0c6"  alt=""/>
      </div>
    </div>
  )
}